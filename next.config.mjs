/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "picsum.photos"
      },
      {
        protocol : "https",
        hostname : "github.com"
      }
    ]
  }
};

export default nextConfig;
