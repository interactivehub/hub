/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENGINE_WS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
