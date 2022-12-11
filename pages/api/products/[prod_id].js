import nc from "next-connect";
import Product from "../../../models/Product";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  let product = await Product.findById(req.query.prod_id);
  await db.disconnect();
  res.send(product);
});

export default handler;
