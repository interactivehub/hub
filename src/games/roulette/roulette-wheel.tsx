import React from "react"
import "react-roulette-pro/dist/index.css"
import { RouletteProps } from "./roulette-horizontal"
import { Wheel } from "react-custom-roulette"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"

const RouletteWheel: React.FC<RouletteProps & { data: WheelData[] }> = (
  props
) => {
  const { data, mustStartSpinning, winningNumber, onSpinStop } = props

  return (
    <Wheel
      data={data}
      prizeNumber={winningNumber.index}
      mustStartSpinning={mustStartSpinning}
      onStopSpinning={onSpinStop}
    />
  )
}

export default RouletteWheel
