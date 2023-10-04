export interface WSEvent<
  TType extends WSEventType = WSEventType,
  TPayload = unknown
> {
  type: TType
  payload: TPayload
}

export type WSEventType = "newUser"
