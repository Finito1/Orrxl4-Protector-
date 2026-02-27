import { save } from "./storage";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).send("No text provided");
  }

  const id = Math.random().toString(36).substring(2,8);

  save(id, text);

  res.json({
    raw: `/api/raw/${id}`
  });
}
