import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req, res) {
  try {
    // Load the server module
    const serverPath = join(__dirname, "../dist/server/server.js");
    const { default: server } = await import(serverPath);

    // Build request
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const url = new URL(req.url || "/", `${protocol}://${host}`);

    // Create Request object
    const request = new Request(url.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
      ...(["POST", "PUT", "PATCH"].includes(req.method) && req.body && {
        body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
      }),
    });

    // Call server's fetch handler
    const response = await server.fetch(request, {}, {});

    // Copy headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send body
    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error("Handler error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end(`500 - Server Error: ${error.message}`);
  }
}
