const PROXY_CONFIG = {
  "/api/*": {
    target: "http://localhost:3000",
    secure: true,
    pathRewrite: {
      "^/api": "",
    },
    onProxyRes: function (pr, req, res) {
      if (pr.headers["set-cookie"]) {
        const cookies = pr.headers["set-cookie"].map((cookie) =>
          cookie.replace(/;(\ )*secure/gi, "")
        );
        pr.headers["set-cookie"] = cookies;
      }
    },
  },
};

module.exports = PROXY_CONFIG;
