const path = require("path");

const Client = path.resolve(__dirname, "../", "src/", "client/");
const Templates = path.join(Client, "templates/");

const Dist = path.resolve(__dirname, "../", "dist/");

module.exports = {
  client: {
    root: path.join(process.cwd(), "src/client/index.tsx"),
    templates: {
      html: path.join(Templates, "index.html"),
      favicon: path.join(Templates, "favicon.ico"),
      faviconPNG: path.resolve(__dirname, "favicon.png")
    },
    dist: path.join(Dist, "client/")
  },
  config: {
    tsConfig: {
      client: path.resolve(__dirname, "tsconfig.client.json"),
      server: path.resolve(__dirname, "tsconfig.server.json")
    }
  }
};
