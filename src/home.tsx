import React from "react"
import useWebSocket from "react-use-websocket"
import { useToast } from "./components/ui/use-toast"
import { WSEvent } from "./types"
import WheelLayout from "./games/wheel/components/wheel-layout"
import Logo from "./components/logo"
import { Toaster } from "./components/ui/toaster"

const engineUrl = import.meta.env.ENGINE_WS_URL || "ws://localhost:8080/ws"

const Home = () => {
  const { toast } = useToast()

  const [newUsers, setNewUsers] = React.useState<WSEvent[]>([])

  const { lastJsonMessage } = useWebSocket<WSEvent>(engineUrl)

  React.useEffect(() => {
    if (lastJsonMessage !== null) {
      setNewUsers((prev) => prev.concat(lastJsonMessage))
    }
  }, [lastJsonMessage, toast])

  console.log(newUsers)

  return (
    <div className="overflow-hidden h-screen">
      <div className="h-20 p-4">
        <Logo />
      </div>

      <WheelLayout />

      <Toaster />
    </div>
  )
}

export default Home
