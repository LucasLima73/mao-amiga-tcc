/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export", // Comment this line when not building the project
    typescript: {
      ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    basePath: isProd ? "" : undefined,
    assetPrefix : isProd ? "" : undefined,
    images: {
      loader: "imgix",
      path: "/",
    },
};

module.exports = nextConfig;
