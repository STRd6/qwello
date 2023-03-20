import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';
import civetPlugin from 'vite-plugin-civet';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
    },
    plugins: [
      staticAdapter({
        origin: 'https://yoursite.qwik.dev',
      }),
      civetPlugin({
        outputTransformerPlugin: 'vite-plugin-qwik',
        outputExtension: 'tsx',
      }),
    ],
  };
});
