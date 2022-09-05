import { env } from './src/env/server.mjs';

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
  /**
   * There is a bug where some events of ReactPlayer do not fire when strict mode is enabled
   * (Happens only in dev though)
   *
   * @link https://github.com/cookpete/react-player/issues/1453
   */
  reactStrictMode: false,
  swcMinify: true,
});
