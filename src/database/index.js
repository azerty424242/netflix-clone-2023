import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://azerty424242:password1234@cluster0.mlcpqya.mongodb.net/netflix-clone-2023"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
