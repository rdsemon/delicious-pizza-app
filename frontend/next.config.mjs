/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://192.168.1.103:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3000",
        pathname: "/static/img/**",
      },
    ],
  },
};

export default nextConfig;
