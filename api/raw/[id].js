export default function handler(req, res) {
  const { data } = req.query;

  if (!data) {
    return res.status(404).send("No data");
  }

  const decoded = Buffer.from(data, "base64").toString("utf-8");

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(decoded);
}
