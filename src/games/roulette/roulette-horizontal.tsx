import React from "react"
import RoulettePro, { PrizeType } from "react-roulette-pro"
import "react-roulette-pro/dist/index.css"

export interface RouletteNumber {
  index: number
  value: number
  color: "red" | "black"
  type: "odd" | "even"
}

export interface RouletteProps {
  mustStartSpinning: boolean
  winningNumber: RouletteNumber
  onSpinStop?: VoidFunction
}

const RouletteHorizontal: React.FC<RouletteProps & { data: PrizeType[] }> = (
  props
) => {
  const { data, mustStartSpinning, winningNumber, onSpinStop } = props

  return (
    <RoulettePro
      prizes={data}
      prizeIndex={winningNumber.index}
      start={mustStartSpinning}
      onPrizeDefined={onSpinStop}
    />
  )
}

export default RouletteHorizontal
