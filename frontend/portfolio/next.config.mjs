// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'], // Your allowed external image domains
  },
};

export default nextConfig; // Use export default instead of module.exports
