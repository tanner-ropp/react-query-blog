module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:any*",
        destination: "/api/:any*",
      },
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};
