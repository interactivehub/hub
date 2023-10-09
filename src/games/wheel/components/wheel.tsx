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
      <CustomWheel
        data={data}
        prizeNumber={winningIndex}
        mustStartSpinning={mustStartSpinning}
        onStopSpinning={onSpinStop}
        outerBorderColor="#121212"
        outerBorderWidth={10}
        radiusLineColor="#121212"
        innerBorderWidth={200}
        innerBorderColor="#121212"
        disableInitialAnimation
        pointerProps={{
          src: "assets/wheel-pointer-sharp.svg",
          style: {
            right: 5,
          },
        }}
      />
      <div className="fixed z-10">ciao</div>
    </div>
  )
}

export default Wheel
