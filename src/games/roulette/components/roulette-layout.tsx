import React from "react"
import RouletteWheel from "./roulette-wheel"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import Typography from "@/components/ui/typography"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import ConfettiExplosion from "react-confetti-explosion"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

const data: WheelData[] = [
  {
    style: { backgroundColor: "#3b82f6", textColor: "black" },
  },
  { style: { backgroundColor: "white" } },
  { style: { backgroundColor: "#0f172a" } },
]

const RouletteLayout: React.FC = () => {
  const [isCelebrating, setIsCelebrating] = React.useState(false)
  const [isSpinning, setIsSpinning] = React.useState(false)
  const { toast } = useToast()

  const onSpinStop = React.useCallback(() => {
    setIsSpinning(false)
    setIsCelebrating(true)

    toast({
      title: "Winning number: 0",
    })
  }, [toast])

  return (
    <div className="flex flex-col items-center">
      <Typography.H1>Roulette</Typography.H1>

      {isCelebrating && <ConfettiExplosion zIndex={10000} />}
      <RouletteWheel
        mustStartSpinning={isSpinning}
        winningIndex={0}
        data={data}
        onSpinStop={onSpinStop}
      />
    </div>
  )
}

export default RouletteLayout
