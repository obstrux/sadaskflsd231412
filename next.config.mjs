/** @type {import('next').NextConfig} */
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default async function () {
  if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
  }

  return nextConfig;
}
