import WheelLayout from "./games/wheel/components/wheel-layout"
import Logo from "./components/logo"
import { Toaster } from "./components/ui/toaster"
import { useGamesMetadata } from "./games/hooks/use-games-metadata"
import { Alert, AlertTitle } from "./components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"

const Home = () => {
  const {
    data: gamesMetadata,
    isLoading: isGamesMetadataLoading,
    error: gamesMetadataError,
  } = useGamesMetadata()

  if (isGamesMetadataLoading) return null
  if (gamesMetadataError || !gamesMetadata) return null

  return (
    <div className="overflow-hidden h-screen">
      <header className="flex flex-col p-4 gap-4">
        <Alert className="bg-popover">
          <RocketIcon className="h-4 w-4" />
          <AlertTitle className="font-normal tracking-normal">
            New games coming soon!
          </AlertTitle>
        </Alert>
        <div className="h-14">
          <Logo />
        </div>
      </header>

      <main>
        <WheelLayout wheelMetadata={gamesMetadata.wheel} />

        <Toaster />
      </main>
    </div>
  )
}

export default Home
