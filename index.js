import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Buslines from "./routes/buslines.js";
import testBusLines from "./routes/testBusLines.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/v1/", Buslines);
app.use("/api/v1/", testBusLines);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
