import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://prathaplee720:AC0WdB9Bm63dY40a@cluster0.aolri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MongoDB Connected...");

    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
export default connectDB;

