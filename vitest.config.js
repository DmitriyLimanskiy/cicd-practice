import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.js'],
        exclude: ['src/scripts/e2e.test.js'],
        globals: true,
        environment: 'node',
    },
});
