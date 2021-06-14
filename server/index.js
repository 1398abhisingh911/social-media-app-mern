const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const authRoute = require("./routes/auth");
const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(console.log("Connected To MONGO DB"))
  .catch(err => console.log(err));

//MiddleWares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend Server is Ready!!!");
});
