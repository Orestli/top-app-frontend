const withSvgr = require("next-svgr");

module.exports = withSvgr({
  withSvgr,
  reactStrictMode: true,
  images: {
    domains: ['courses-top.ru'],
  }
});
