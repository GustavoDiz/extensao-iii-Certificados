const express = require("express");
const cors = require("cors");
const PORT = 5000;
const userRoutes = require("./routes/userRoute.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api",userRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
