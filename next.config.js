/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/:urunler",
            destination: "/product/?query=:query",
          },
          {
            source: "/:urunler/:id",
            destination: "/product-detail/?id=:id",
          }, 
        ];
      },
};

module.exports = nextConfig;
