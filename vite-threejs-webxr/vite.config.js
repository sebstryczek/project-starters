// import legacy from '@vitejs/plugin-legacy';

export default {
  plugins: [
    // legacy({ targets: ['defaults', 'not IE 11'] }),
  ],
  server: {
    https: true,
  },
  build: {
    target: "es2015",
    polyfillDynamicImport: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      input: {
        main: "forexp-mirror-chart.html",
        // index: "index.html",
      },
    },
  },
};
