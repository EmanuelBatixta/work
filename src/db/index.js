import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const uri = process.env.MONGO_URI;

let db;

const main = async () => {
    try {
        db = await mongoose.connect(uri)
        console.log("Conectado a base de dados")
        return db
    } catch (error) {
        console.error("Erro ao se conectar a base de dados:", error)
    }
}

export default main