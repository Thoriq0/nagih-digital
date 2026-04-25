/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    "192.168.100.22",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
