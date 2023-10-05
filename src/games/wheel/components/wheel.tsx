import React from "react"
import { Wheel as CustomWheel } from "react-custom-roulette"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"

export interface RouletteProps {
  mustStartSpinning: boolean
  winningIndex: number
  onSpinStop?: VoidFunction
}

const Wheel: React.FC<RouletteProps & { data: WheelData[] }> = (props) => {
  const { data, mustStartSpinning, winningIndex, onSpinStop } = props

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <CustomWheel
          data={data}
          prizeNumber={winningIndex}
          mustStartSpinning={mustStartSpinning}
          onStopSpinning={onSpinStop}
          outerBorderWidth={0}
          radiusLineWidth={5}
          radiusLineColor="white"
          spinDuration={1}
          innerBorderWidth={210}
          innerBorderColor="white"
          pointerProps={{
            style: {
              top: 0,
              right: 0,
            },
          }}
        />
      </div>

      <div className="fixed z-10">ciao</div>
    </div>
  )
}

export default Wheel
