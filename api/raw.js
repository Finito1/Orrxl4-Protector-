export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send("No ID provided");
  }

  const userAgent = req.headers["user-agent"] || "";

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
              color: red;
              font-family: Arial;
              font-size: 40px;
            }
          </style>
        </head>
        <body>
          ORRXL4 PROTECTOR
        </body>
      </html>
    `);
  }

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
