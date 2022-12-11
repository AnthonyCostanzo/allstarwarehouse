import nc from "next-connect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import db from "../../../utils/db";
import { signToken } from "../../../utils/auth";
const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const foundUser = await User.findOne({ email: req.body.email });
  await db.disconnect();
  if (foundUser && bcrypt.compareSync(req.body.password, foundUser.password)) {
    const token = signToken(foundUser);
    res.send({
      token,
      _id: foundUser._id,
      name: foundUser.name,
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid user or password" });
  }
});

export default handler;
