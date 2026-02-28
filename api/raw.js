export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send("No ID provided");
  }

  const userAgent = req.headers["user-agent"] || "";

  // 🔵 SI NO ES ROBLOX → MOSTRAR PANTALLA AZUL
  if (!userAgent.toLowerCase().includes("roblox")) {
    res.setHeader("Content-Type", "text/html");
    return res.status(200).send(`
      <html>
        <head>
          <title>ORRXL4 PROTECTOR</title>
          <style>
            body {
              margin: 0;
              background: #000814;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              flex-direction: column;
              font-family: Arial, sans-serif;
              text-align: center;
              color: #00aaff;
            }
            h1 {
              font-size: 42px;
              margin-bottom: 10px;
            }
            p {
              font-size: 18px;
              margin: 5px 0;
            }
            a {
              color: #00ffff;
              text-decoration: none;
              font-weight: bold;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <h1>🔒 ORRXL4 PROTECTOR</h1>
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

  // 🔓 SI ES ROBLOX → OBTENER SCRIPT DESDE GITHUB
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
    return res.status(404).send("Script not found");
  }

  const script = await githubResponse.text();

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}              margin-top: 20px;
              color: white;
              font-size: 18px;
              text-decoration: none;
              opacity: 0.8;
              transition: 0.3s;
            }

            .link:hover {
              opacity: 1;
            }
          </style>
        </head>
        <body>
          <div class="title">🔒 ORRXL4 PROTECTOR</div>
          <a class="link" href="https://orrxl4-protector.vercel.app/" target="_blank">
            https://orrxl4-protector.vercel.app/
          </a>
        </body>
      </html>
    `);
  }

  // 🧠 Si es Roblox → devolver script real
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
    return res.status(404).send("Script not found");
  }

  const script = await githubResponse.text();

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
