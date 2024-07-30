import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email) {
  await dbConnect();

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function getUserByCredentials(email, password) {
  try {
    const user = await getUserByEmail(email);

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Invalid password");
    }

    return user;
  } catch {
    return null;
  }
}