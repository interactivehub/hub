import React from "react"
import { Wheel } from "react-custom-roulette"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"

export interface RouletteProps {
  mustStartSpinning: boolean
  winningIndex: number
  onSpinStop?: VoidFunction
}

const RouletteWheel: React.FC<RouletteProps & { data: WheelData[] }> = (
  props
) => {
  const { data, mustStartSpinning, winningIndex, onSpinStop } = props

  return (
    <Wheel
      data={data}
      prizeNumber={winningIndex}
      mustStartSpinning={mustStartSpinning}
      onStopSpinning={onSpinStop}
      outerBorderWidth={2}
      radiusLineWidth={2}
      spinDuration={1}
    />
  )
}

export default RouletteWheel
