import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve original image files directly instead of routing through
    // Vercel's image optimizer, which hit its quota and returned 402
    // (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) for uncached images.
    unoptimized: true,
  },
};

export default nextConfig;
