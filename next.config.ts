import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apple requires the association file to be served as JSON. It has no
        // extension on purpose (Apple looks for that exact name), so nothing
        // infers the type for it and Next would send it as a generic download.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
