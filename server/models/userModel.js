import { db } from "../mongoose.js";

const userSchema = db.Schema(
  {
    name: { type: String, required: [true, "Please enter name"] },
    username: {
      type: String,
      required: [true, "Please enter username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: { type: String, required: [true, "Please enter password"] },
  },
  {
    timestamps: true,
  }
);

const User = db.model("users", userSchema);

export default User;
