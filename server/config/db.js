import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Using local MongoDB. If you want to use MongoDB Atlas, replace with your connection string
    const conn = await mongoose.connect(
      "mongodb+srv://shivam:20180116282@cluster0.uoartqz.mongodb.net/?appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    console.log('MongoDB Connected:', conn.connection.host);
    return conn;
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;
