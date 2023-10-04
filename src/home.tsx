import React from "react"
import ConfettiExplosion from "react-confetti-explosion"
import useWebSocket from "react-use-websocket"
import { useToast } from "./components/ui/use-toast"
import { WSEvent } from "./types"
import NotificationsBox from "./components/notifications-box"
import RouletteWheel from "./games/roulette/components/roulette-wheel"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import RouletteLayout from "./games/roulette/components/roulette-layout"
import Logo from "./components/logo"

const engineUrl = import.meta.env.ENGINE_WS_URL || "ws://localhost:8080/ws"

const Home = () => {
  const [isExploding, setIsExploding] = React.useState(false)
  const { toast } = useToast()

  const [newUsers, setNewUsers] = React.useState<WSEvent[]>([])

  const { lastJsonMessage, sendJsonMessage, readyState } =
    useWebSocket<WSEvent>(engineUrl)

  React.useEffect(() => {
    if (lastJsonMessage !== null) {
      setNewUsers((prev) => prev.concat(lastJsonMessage))
    }

    // toast({
    //   title: lastJsonMessage.type,
    //   // description: lastJsonMessage.payload,
    // })
  }, [lastJsonMessage, toast])

  console.log(newUsers)

  return (
    <div className="h-screen">
      <button
        onClick={() => {
          //   sendJsonMessage({
          //     type: "newUser",
          //     payload: {
          //       new: "user",
          //     },
          //   })
          setIsExploding(true)
          toast({
            // title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Send mex
      </button>

      {isExploding && (
        <ConfettiExplosion
          particleCount={200}
          onComplete={() => setIsExploding(false)}
        />
      )}

      <RouletteLayout />
    </div>
  )
}

export default Home
