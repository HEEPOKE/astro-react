/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
