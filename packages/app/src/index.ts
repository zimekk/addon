import express, { Router } from "express";
import path from "path";
import hello from "@dev/lib";

// http://localhost:8080/api/hello?name=World&delay=1000 => {"text":"Hello World"}
const api = Router().all("/api/hello.json", (req, res) =>
  (({ delay = 500, name = "" }) =>
    new Promise((resolve) => setTimeout(resolve, Number(delay))).then(() =>
      res.send({ greeting: hello(String(name)) })
    ))(req.query)
);

const web =
  process.env.NODE_ENV === "development"
    ? ((config) => {
        const compiler = require("webpack")({ mode: "development", ...config });
        return Router()
          .use(
            require("webpack-dev-middleware")(compiler, {
              // mode: 'development'
              // webpack-dev-middleware options
              publicPath: config.output?.publicPath,
            })
          )
          .use(
            require(`webpack-hot-middleware`)(compiler, {
              log: false,
              path: `/__webpack_hmr`,
              heartbeat: 10 * 1000,
            })
          );
      })(require("@dev/web/webpack.config").default)
    : Router().use(
        express.static(
          path.resolve(
            path.dirname(require.resolve("@dev/web/package")),
            "public"
          )
        )
      );

const PORT = 8080;

export default express()
  .use(require("morgan")("combined"))
  .use(api)
  .use(web)
  .listen(PORT, (...args) =>
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
  );
