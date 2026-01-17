import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "up.yimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "humbletoolsmith.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shafiul.github.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
