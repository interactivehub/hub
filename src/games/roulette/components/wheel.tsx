import React from "react"
import "react-roulette-pro/dist/index.css"
import { RouletteProps } from "./horizontal"
import { Wheel } from "react-custom-roulette"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"

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
    />
  )
}

export default RouletteWheel
