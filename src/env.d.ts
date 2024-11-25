/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string;
    readonly MODE: string;
    readonly PROD: boolean;
    readonly DEV: boolean;
    // Add custom environment variables here
    // readonly MY_CUSTOM_VAR: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }