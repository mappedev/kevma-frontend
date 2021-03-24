module.exports = {
  images: {
    domains: ["rickandmortyapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/characters",
        permanent: true,
      },
    ];
  },
};
