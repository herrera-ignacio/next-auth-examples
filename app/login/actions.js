"use server";
import { signIn } from "@/utils/auth";
import { AuthError } from "next-auth";

export async function handleLogin(currentState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {

  const result = await signIn("credentials", {
    email,
    password,
    // TODO redirect to a callback url
    redirectTo: "/",
  });

  } catch(error) {
   if (error instanceof AuthError) {
     return {
       message: "Invalid credentials"
     }
   } else {
     throw error;
   }
  }
}