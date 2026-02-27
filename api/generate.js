export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { content } = req.body;

  if (!content) {
    return res.status(400).send("No content");
  }

  const id = Math.random().toString(36).substring(2, 10);
  const fileName = `${id}.txt`;

  const response = await fetch(
    "https://api.github.com/repos/Finito1/Orrxl4-Protector-/contents/raw-files/" + fileName,
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

  if (!response.ok) {
    const error = await response.text();
    return res.status(500).send(error);
  }

  const rawUrl = `https://raw.githubusercontent.com/Finito1/Orrxl4-Protector-/main/raw-files/${fileName}`;

  res.status(200).json({ raw: rawUrl });
}
