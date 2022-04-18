/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   async redirects() {
      return [
         {
            source: "/menu/pizzas",
            destination: "/menu",
            permanent: true,
         },
      ];
   },
};

module.exports = nextConfig;
