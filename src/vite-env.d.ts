/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENGINE_WS_URL: string
  readonly ENGINE_HTTP_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
