const express = require("express");
const { userRouter } = require("./routes/user");
const { courceRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const { mongoose } = require("./db.js");

const port = 3000;
const app = express();

app.use("/user", userRouter);
app.use("/course", courceRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://cetcracknoway:HlP6J69fvaVfehUt@100xdevs.dqxhr.mongodb.net/coursera-app"
    )
    .then(() => console.log("Database is connected."))
    .catch((e) =>
      console.log("Failed to connect to the database.", "error : ", e)
    );

  app.listen(port, () => console.log(`Server is running on port : ${port}`));
}

main();
