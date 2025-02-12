const express = require("express");
const { userRouter } = require("./routes/user");
const { courceRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const {} = require("./db.js");

const app = express();

app.use("/user", userRouter);
app.use("/course", courceRouter);
app.use("/admin", adminRouter);

const port = 3000;

app.listen(port, () => console.log(`Server is running on port : ${port}`));
