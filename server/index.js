const express = require("express");
const cors = require("cors");
const PORT = 5000;
const user = require("./routes/user.js");
const events = require('./routes/event.js');
const certificates = require('./routes/certificate.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api",user);
app.use("/api",events);
app.use("/api",certificates);
app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
