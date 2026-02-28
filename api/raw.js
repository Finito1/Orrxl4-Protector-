export default async function handler(req, res) {
  try {
    const id = req.query?.id;

    if (!id) {
      return res.status(400).send("No ID provided");
    }

    const userAgent = req.headers["user-agent"] || "";

    // Si NO es Roblox → pantalla visual azul
    if (!userAgent.toLowerCase().includes("roblox")) {
      res.setHeader("Content-Type", "text/html");
      return res.status(200).send(`
        <html>
          <head>
            <title>ORRXL4 PROTECTOR</title>
            <style>
              body {
                margin: 0;
                background: black;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                flex-direction: column;
                font-family: Arial;
                color: #00aaff;
                text-align: center;
              }
              h1 {
                font-size: 40px;
                margin: 10px 0;
              }
              p {
                font-size: 18px;
                margin: 5px 0;
              }
              a {
                color: #00aaff;
                text-decoration: none;
              }
            </style>
          </head>
          <body>
            <h1>ORRXL4 PROTECTOR 🔒</h1>
            <p>THIS SCRIPT WAS PROTECTED BY ORRXL4 PROTECTOR</p>
            <p>
              <a href="https://orrxl4-protector.vercel.app/" target="_blank">
                https://orrxl4-protector.vercel.app/
              </a>
            </p>
          </body>
        </html>
      `);
    }

    // Si es Roblox → traer script desde GitHub
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return res.status(500).send("Missing GitHub token");
    }

    const githubResponse = await fetch(
      `https://api.github.com/repos/Finito1/Orrxl4-Protector-/contents/raw-files/${id}.txt`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    if (!githubResponse.ok) {
      return res.status(404).send("Script not found");
    }

    const script = await githubResponse.text();

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(script);

  } catch (err) {
    console.error("RAW ERROR:", err);
    return res.status(500).send("Internal error");
  }
}
