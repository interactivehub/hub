import { WSEvent } from "@/types"

export interface RequestWheelRoundWsEventPayload {
  clientSeed: string
}

export type RequestWheelRoundWsEvent = WSEvent<
  "requestWheelRound",
  RequestWheelRoundWsEventPayload
>
