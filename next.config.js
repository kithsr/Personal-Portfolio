

/** @type {import('next').NextConfig} */
const repo = "Personal-Portfolio";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repo}`,
  },
};

module.exports = nextConfig;
