export default async function handler(req, res) {
  try {
    // Import the server module
    const { default: server } = await import("../dist/server/server.js");
    
    // Build the full URL properly
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
    const fullUrl = `${protocol}://${host}${req.url}`;
    
    console.log("Handling request:", {
      method: req.method,
      url: req.url,
      fullUrl,
    });
    
    // Create a Request object
    const request = new Request(fullUrl, {
      method: req.method,
      headers: new Headers(req.headers),
      ...(req.method !== "GET" &&
      req.method !== "HEAD" &&
      req.body && {
        body:
          typeof req.body === "string"
            ? req.body
            : JSON.stringify(req.body),
      }),
    });

    // Call the server's fetch method
    const response = await server.fetch(request, {}, {});

    // Set response status and headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const buffer = await response.arrayBuffer();
    res.end(Buffer.from(buffer));
  } catch (error) {
    console.error("Server handler error:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>500 - Internal Server Error</h1><pre>${error.message}</pre>`);
  }
}
