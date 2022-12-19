import Product from "../../../../../models/Product";
import db from "../../../../../utils/db";
async function handler(req, res) {
  if (req.method === "DELETE") {
    await db.connect();
    const { id } = req.query;
    await Product.deleteOne({ _id: id });
    await db.disconnect();
    res.send({ message: "deleted" });
  } else {
    res.send({ message: "DELETE ONLY" });
  }
}

export default handler;
