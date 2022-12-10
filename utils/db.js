import mongoose, { connections, mongo } from "mongoose";
require("dotenv").config();
const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

function convertDocToObject(mongoDoc) {
  mongoDoc._id = mongoDoc._id.toString();
  mongoDoc.createdAt = mongoDoc.createdAt.toString();
  mongoDoc.updatedAt = mongoDoc.updatedAt.toString();
  return mongoDoc;
}

const db = { connect, disconnect, convertDocToObject };
export default db;
