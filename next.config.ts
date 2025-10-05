import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              ref: true,
              svgo: true,
              titleProp: true,
              svgoConfig: { plugins: [{ name: "preset-default" }] },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
