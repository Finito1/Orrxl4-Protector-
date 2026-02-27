export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { content } = req.body;

  if (!content) {
    return res.status(400).send("No content");
  }

  // Generar ID único
  const id = Math.random().toString(36).substring(2, 10);
  const fileName = `${id}.txt`;

  // Subir archivo a GitHub (se guarda en raw-files/)
  const githubResponse = await fetch(
    `https://api.github.com/repos/Finito1/Orrxl4-Protector-/contents/raw-files/${fileName}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "upload script",
        content: Buffer.from(content).toString("base64"),
      }),
    }
  );

  if (!githubResponse.ok) {
    const error = await githubResponse.text();
    return res.status(500).send(error);
  }

  // 🔥 IMPORTANTE: ahora usamos TU dominio
  const rawUrl = `https://orrxl4-protector.vercel.app/api/raw?id=${id}`;

  res.status(200).json({ raw: rawUrl });
}
