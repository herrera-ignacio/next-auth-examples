"use server";
import { signIn } from "@/utils/auth";

export async function handleLogin(currentState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
    const result = await signIn("credentials", {
      email,
      password,
      // TODO redirect to a callback url
      redirectTo: "/",
    });

    if (result?.error) {
      return {
        message: "Invalid credentials"
      }
    }
}