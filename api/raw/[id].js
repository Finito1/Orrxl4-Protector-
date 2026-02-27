import { get } from "../storage";

export default function handler(req, res) {
  const { id } = req.query;
  const userAgent = req.headers["user-agent"] || "";
  const content = get(id);

  if (!content) {
    return res.status(404).send("Not found");
  }

  if (userAgent.includes("Mozilla")) {
    res.setHeader("Content-Type", "text/html");
    return res.send(`
      <html>
        <body style="background:black;color:#0078ff;display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;">
          <h1>ORRXL4 PROTECTOR 🔒</h1>
        </body>
      </html>
    `);
  }

  res.setHeader("Content-Type", "text/plain");
  res.send(content);
}
