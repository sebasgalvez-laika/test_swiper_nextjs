/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  images: {
    // TODO: cambiar todas las importaciones de next/image por next/future/image
    formats: ["image/webp"],
    domains: [
      "picsum.photos",
    ],
  },
}

module.exports = nextConfig