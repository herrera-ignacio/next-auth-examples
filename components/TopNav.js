"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopNav() {
  const { data, status, loading } = useSession();
  const isAdmin = data?.user?.role === "admin";

  return (
    <nav className="bg-gray-800">
      <div className="max-w-full flex items-stretch justify-center space-x-24 text-white">

        <Link href="/">Home</Link>

        {status === "authenticated" ? (
          <>
            <Link href={`/dashboard/${isAdmin ? "admin" : "user"}`}>{data?.user?.name}</Link>
            <a
              className="cursor-pointer"
              onClick={() => signOut({callbackUrl: "/login"})}
            >
              Logout
            </a>
          </>
        ) : status === "loading" ? (
          <span>Loading...</span>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  )
}