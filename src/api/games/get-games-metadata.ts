interface WheelItem {
  color: string
  payout: string
}

export interface WheelMetadata {
  items: WheelItem[]
  showcase: WheelItem[]
}

export interface GamesMetadata {
  wheel: WheelMetadata
}

const win30x = "#FA4475"
const win5x = "#FFE066"
const win3x = "#5ADBFF"
const win2x = "#606E80"

export const API_V1_GAMES_METADATA_URL = "/v1/games/metadata"

const MOCK_GAMES_METADATA: GamesMetadata = {
  wheel: {
    items: [
      { color: win30x, payout: "30.00" }, // Brand, 30x
      { color: win5x, payout: "5.00" }, // Red, 5x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win5x, payout: "5.00" }, // Red, 5x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win5x, payout: "5.00" }, // Red, 5x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win5x, payout: "5.00" }, // Red, 5x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win5x, payout: "5.00" }, // Red, 5x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win2x, payout: "2.00" }, // Grey, 2x
    ],
    showcase: [
      { color: win2x, payout: "2.00" }, // Grey, 2x
      { color: win3x, payout: "3.00" }, // Blue, 3x
      { color: win5x, payout: "5.00" }, // Yellow, 5x
      { color: win30x, payout: "30.00" }, // Brand, 30x
    ],
  },
}

export const getGamesMetadata = async (): Promise<GamesMetadata> => {
  // const engineClient = getEngineClient()
  // await engineClient.get<GamesMetadata>(API_V1_GAMES_METADATA_URL)

  // TODO: use api response
  return MOCK_GAMES_METADATA
}
