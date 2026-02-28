export default async function handler(req, res) {
  try {
    const userAgent = req.headers["user-agent"] || "";
    const isRoblox = userAgent.toLowerCase().includes("roblox");

    const { id } = req.query;

    if (!id) {
      return res.status(400).send("-- Missing Script ID --");
    }

    // =========================
    // PANTALLA VISUAL (NO ROBLOX)
    // =========================
    if (!isRoblox) {
      res.setHeader("Content-Type", "text/html");

      return res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ORRXL4 PROTECTOR</title>
            <style>
              body {
                margin: 0;
                background: black;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                padding: 20px;
                box-sizing: border-box;
                font-family: Arial, sans-serif;
                color: #00aaff;
                text-align: center;
              }

              .container {
                width: 100%;
                max-width: 600px;
              }

              h1 {
                font-size: clamp(28px, 8vw, 50px);
                margin-bottom: 20px;
              }

              p {
                font-size: clamp(14px, 4vw, 20px);
                margin: 10px 0;
              }

              a {
                color: #00aaff;
                text-decoration: none;
                word-break: break-word;
              }

              a:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>ORRXL4 PROTECTOR 🔒</h1>
              <p>THIS SCRIPT WAS PROTECTED BY ORRXL4 PROTECTOR</p>
              <p>
                <a href="https://orrxl4-protector.vercel.app/" target="_blank">
                  https://orrxl4-protector.vercel.app/
                </a>
              </p>
            </div>
          </body>
        </html>
      `);
    }

    // =========================
    // PARTE ROBLOX (DEVUELVE SCRIPT REAL)
    // =========================

    const githubResponse = await fetch(
      `https://api.github.com/repos/Finito1/Orrxl4-Protector-/contents/raw-files/${id}.txt`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    if (!githubResponse.ok) {
      return res.status(404).send("-- Script Not Found --");
    }

    const script = await githubResponse.text();

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(script);

  } catch (error) {
    console.error("RAW ERROR:", error);
    return res.status(500).send("-- Internal Server Error --");
  }
}
