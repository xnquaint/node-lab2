export function GET(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Welcome to the route1!" }));
}

export function POST(req, res, body) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "POST request received at route1",
      data: body,
    }),
  );
}

export function OPTIONS(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    Allow: "GET, POST, OPTIONS",
  });
  res.end(JSON.stringify({ message: "Allowed methods: GET, POST, OPTIONS" }));
}