process.env.SKIP_ENV_VALIDATION === 'false' && (await import('./src/env/server.mjs'));

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['img.youtube.com'],
  },
  output: 'standalone',
});
