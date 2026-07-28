import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Using local MongoDB. If you want to use MongoDB Atlas, replace with your connection string
    const conn = await mongoose.connect(
      process.env.MONGO_URI,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    console.log("MongoDB Connected:", conn.connection.host);
    return conn;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
