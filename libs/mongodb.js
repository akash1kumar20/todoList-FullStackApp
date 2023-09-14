import mongoose from "mongoose";
//to make a connection with mongoDb
const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    //we are processing MONGO_URI from the enviroment.
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};
export default connectMongoDb;
