import {
  API_V1_GAMES_METADATA_URL,
  GamesMetadata,
  getGamesMetadata,
} from "@/api/games/get-games-metadata"
import { AxiosError } from "axios"
import useSWR, { SWRResponse } from "swr"

export const useGamesMetadata = (): SWRResponse<GamesMetadata, AxiosError> => {
  return useSWR(API_V1_GAMES_METADATA_URL, getGamesMetadata)
}
