import axios, { AxiosInstance } from "axios"

const ENGINE_BASE_URL =
  import.meta.env.ENGINE_HTTP_URL || "http://localhost:8080"

export type EngineClient = AxiosInstance

let engineClient: EngineClient

export const getEngineClient = () => {
  if (engineClient) return engineClient

  engineClient = axios.create({
    baseURL: ENGINE_BASE_URL,
  })

  return engineClient
}
