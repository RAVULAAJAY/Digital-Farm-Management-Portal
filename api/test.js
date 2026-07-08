export default function handler(req, res) {
  res.status(200).json({
    hello: "world",
    timestamp: new Date().toISOString(),
    path: req.url,
  });
}
