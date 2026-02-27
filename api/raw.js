export default async function handler(req, res) {

  const userAgent = req.headers["user-agent"] || "";

  // TU TEXTO REAL AQUÍ
  const realText = `
print("Hola desde ORRXL4")
`;

  // Si es navegador normal
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

  // Si NO es navegador (ej: Roblox HttpGet)
  res.setHeader("Content-Type", "text/plain");
  res.send(realText);
}
