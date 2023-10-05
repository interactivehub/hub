import React from "react"
import FortuneWheel from "./fortune-wheel"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import Typography from "@/components/ui/typography"
import ConfettiExplosion from "react-confetti-explosion"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const data: WheelData[] = [
  { style: { backgroundColor: "#3b82f6" } },
  { style: { backgroundColor: "#6F7F9A" } },
  { style: { backgroundColor: "#57BBF3" } },
  { style: { backgroundColor: "#6F7F9A" } },
  { style: { backgroundColor: "#57BBF3" } },
  { style: { backgroundColor: "#D58678" } },
  { style: { backgroundColor: "#EDD079" } },
  { style: { backgroundColor: "#D58678" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "#6F7F9A" } },
  { style: { backgroundColor: "#57BBF3" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#6F7F9A" } },
  { style: { backgroundColor: "#57BBF3" } },
  { style: { backgroundColor: "#6F7F9A" } },
  { style: { backgroundColor: "#57BBF3" } },
  { style: { backgroundColor: "#D58678" } },
  { style: { backgroundColor: "#EDD079" } },
  { style: { backgroundColor: "#D58678" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
  { style: { backgroundColor: "#6F7F9A" } },
]

const FortuneWheelLayout: React.FC = () => {
  const [isCelebrating, setIsCelebrating] = React.useState(false)
  const [isSpinning, setIsSpinning] = React.useState(true)
  const { toast } = useToast()

  const onSpinStop = React.useCallback(() => {
    setIsSpinning(false)
    setIsCelebrating(true)

    toast({
      title: "Winning number: 0",
    })
  }, [toast])

  return (
    <>
      {isCelebrating && (
        <div className="absolute flex justify-center items-center  w-full">
          <ConfettiExplosion zIndex={99} />
        </div>
      )}
      <div className="p-4 flex flex-col gap-4">
        <Typography.H1>Fortune Wheel</Typography.H1>
        <Typography.Lead>Bet on a color and try your luck!</Typography.Lead>

        <Card className="p-8">
          <FortuneWheel
            mustStartSpinning={isSpinning}
            winningIndex={0}
            data={data}
            onSpinStop={onSpinStop}
          />
        </Card>
      </div>
    </>
  )
}

export default FortuneWheelLayout
