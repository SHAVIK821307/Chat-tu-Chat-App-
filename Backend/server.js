const express = require("express");
const app = express();
const connectMongo=require("./db/connectMongo.js")
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();


const authRoutes = require("./routes/authroute.js");
const messageRoutes = require("./routes/messageroutes.js");
const usersRoutes = require("./routes/usersroutes.js");

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",usersRoutes);

app.get("/", (req, res) => {
  res.send("Hellow chat");
});


app.listen(PORT, () => {
    connectMongo()
  console.log(`server running at port ${PORT}`);
});
