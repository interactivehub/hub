import React from "react"
import Wheel from "./wheel"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import Typography from "@/components/ui/typography"
import ConfettiExplosion from "react-confetti-explosion"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { WheelMetadata } from "@/api/games/get-games-metadata"
import useWebSocket from "react-use-websocket"
import { ENGINE_WS_URL } from "@/constants"
import { RequestWheelRoundWsEvent } from "../types"

export interface WheelLayoutProps {
  wheelMetadata: WheelMetadata
}

const WheelLayout: React.FC<WheelLayoutProps> = ({ wheelMetadata }) => {
  const { sendJsonMessage } = useWebSocket(ENGINE_WS_URL)

  const [isCelebrating, setIsCelebrating] = React.useState(false)
  const { toast } = useToast()

  const [mustSpin, setMustSpin] = React.useState(false)
  const [prizeNumber, setPrizeNumber] = React.useState(0)

  const formattedWheelData: WheelData[] = React.useMemo(() => {
    return wheelMetadata.items.map((item) => ({
      style: {
        backgroundColor: item.color,
      },
    }))
  }, [wheelMetadata.items])

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(
        Math.random() * formattedWheelData.length
      )
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  const requestNewRound = React.useCallback(async () => {
    const clientSeed = "random-shitAAA"

    const requestWheelRoundEvent: RequestWheelRoundWsEvent = {
      type: "requestWheelRound",
      payload: {
        clientSeed,
      },
    }

    void sendJsonMessage(requestWheelRoundEvent)
  }, [sendJsonMessage])

  const onSpinStop = React.useCallback(() => {
    setIsCelebrating(true)
    setMustSpin(false)

    toast({
      title: `Winning number: ${prizeNumber}, color: ${formattedWheelData[prizeNumber].style?.backgroundColor}`,
    })

    requestNewRound()
  }, [formattedWheelData, prizeNumber, requestNewRound, toast])

  return (
    <>
      {isCelebrating && (
        <div className="absolute flex justify-center items-center  w-full">
          <ConfettiExplosion zIndex={99} />
        </div>
      )}
      <div className="p-4 flex flex-col">
        <Card>
          <CardContent className="flex flex-col gap-4 p-8">
            <Typography.H2>Wheel</Typography.H2>

            {formattedWheelData && (
              <Wheel
                mustStartSpinning={mustSpin}
                winningIndex={prizeNumber}
                data={formattedWheelData}
                onSpinStop={onSpinStop}
              />
            )}

            <div className="flex items-center justify-between bg-popover p-4 rounded-sm">
              {wheelMetadata.showcase.map((item) => (
                <div
                  key={item.color}
                  className="flex items-center justify-between gap-2"
                >
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <Typography.Small>{item.payout}&times;</Typography.Small>
                </div>
              ))}
            </div>
          </CardContent>

          <button onClick={handleSpinClick}>Request new round</button>
        </Card>
      </div>
    </>
  )
}

export default WheelLayout
