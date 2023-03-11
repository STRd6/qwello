import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import civetPlugin from 'vite-plugin-civet';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      civetPlugin({
        outputTransformerPlugin: 'vite-plugin-qwik',
        outputExtension: 'tsx',
      }),
      qwikCity(), qwikVite(), tsconfigPaths()
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
