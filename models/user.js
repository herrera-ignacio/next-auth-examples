import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: 1,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      lowercase: true,
      unique: true,
      minLength: 5,
    },
    password: String,
    role: {
      // you can manually set via a mongo query to "admin"
      type: String,
      default: "user",
    },
    image: String,
  },
  { timestamps: true },
);

userSchema.plugin(uniqueValidator);

export const isAdmin = (user) => user.role === "admin";

export default mongoose.models?.User || mongoose.model("User", userSchema);

