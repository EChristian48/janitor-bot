/// <reference types="vite-node/client" />

interface ImportMetaEnv {
  readonly VITE_BOT_TOKEN: string;
  readonly VITE_APP_ID: string;
  readonly VITE_JANITOR_EMAIL: string;
  readonly VITE_JANITOR_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
