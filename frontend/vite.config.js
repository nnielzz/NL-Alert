import { defineConfig } from 'vite';
export default defineConfig({
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    outDir: '../nl_alert/www', emptyOutDir: false,
    lib: { entry: 'src/main.jsx', formats: ['es'], fileName: () => 'nl-alert-panel.js' },
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
