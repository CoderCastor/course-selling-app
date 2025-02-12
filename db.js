const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});
const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});
const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});
const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema);

module.exports = {
  mongoose,
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
