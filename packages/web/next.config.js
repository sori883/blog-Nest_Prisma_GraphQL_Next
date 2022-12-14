/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")(['react-syntax-highlighter']);

const nextConfig =  {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    APOLLO_URI: process.env.SERVER_APOLLO_URI,
    GCS_URL: process.env.GCS_URL,
  },
  publicRuntimeConfig: {
    APOLLO_URI: process.env.PUBLIC_APOLLO_URI,
    GCS_URL: process.env.GCS_URL,
    TWITTER_ID: process.env.TWITTER_ID,
    FBAPP_ID: process.env.FBAPP_ID
  },
  images: {
    domains: ['storage.googleapis.com', 'storage.cloud.google.com'],
  },
  compiler: {
    emotion: true
  }
};

const buildConfig = _phase => {
  const plugins = [withTM];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  });
  return config;
};


module.exports = buildConfig();