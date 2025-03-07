require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cafeRoutes = require("./src/routes/cafeRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use("/api/cafes", cafeRoutes);

app.get("/", (req, res) => {
   res.send("E amo BackEnd!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});