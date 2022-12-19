import User from "../../../models/User";
import db from "../../../utils/db";
async function handler(req, res) {
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.status(200).send({ users: users });
}

export default handler;
