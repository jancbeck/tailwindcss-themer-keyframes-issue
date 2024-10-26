/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'e2e', 'examples'],
    coverage: {
      include: ['src'],
      enabled: true
    }
  }
})
