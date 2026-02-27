export const config = {
  runtime: "nodejs",
};
import { storage } from "../storage";

export default function handler(req, res) {
  const { id } = req.query;

  if (!storage[id]) {
    return res.status(404).send("Not Found");
  }

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(storage[id]);
}
