export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).send("No code provided");
  }

  const encoded = Buffer.from(code).toString("base64");

  res.status(200).json({
    raw: `/api/raw?data=${encoded}`
  });
}
