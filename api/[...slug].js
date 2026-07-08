const server = require("../../dist/server/server.js").default;

export default async function handler(req, res) {
  return server.fetch(
    new Request(new URL(req.url, `http://${req.headers.host}`), {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
    }),
    {}
  )
    .then((response) => {
      res.statusCode = response.status;

      response.headers.forEach((value, key) => {
        res.setHeader(key, value);
      });

      return response.arrayBuffer().then((buffer) => {
        res.end(Buffer.from(buffer));
      });
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    });
}
