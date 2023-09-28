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
  winningIndex: number
  onSpinStop?: VoidFunction
}

const RouletteHorizontal: React.FC<RouletteProps & { data: PrizeType[] }> = (
  props
) => {
  const { data, mustStartSpinning, winningIndex, onSpinStop } = props

  return (
    <RoulettePro
      prizes={data}
      prizeIndex={winningIndex}
      start={mustStartSpinning}
      onPrizeDefined={onSpinStop}
    />
  )
}

export default RouletteHorizontal
