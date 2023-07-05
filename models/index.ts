import mongoose from "mongoose";
import Accounts from "./Accounts";
import User from "./User";
const { MONGODB_URL } = process.env;




export const dbCon = async () => {
  const conn = await mongoose.connect(MONGODB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions)
  const db = mongoose.connection;
  db.on('connected', () => {
    console.log('Mongoose default connection is open');
  });
  db.on('error', err => {
    console.log(`Mongoose default connection has occurred ${err} error`);
  });
  return {
    conn,
    Accounts,
    User,
  };
};


