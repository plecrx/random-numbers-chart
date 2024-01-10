import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from "url";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: vitestConfig.test,
})
