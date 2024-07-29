"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <a
      className="cursor-pointer"
      onClick={() => signOut({callbackUrl: "/login"})}
    >
      Logout
    </a>
  )
}