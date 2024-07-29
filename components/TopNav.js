import Link from "next/link";
import {auth} from "@/utils/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function TopNav() {
  const session = await auth();
  const isAdmin = session?.user.role === "admin";

  return (
      <nav className="bg-gray-800">
        <div className="max-w-full flex items-stretch justify-center space-x-24 text-white">

          <Link href="/">Home</Link>

          {session ? (
            <>
              <Link href={`/dashboard/${isAdmin ? "admin" : "user"}`}>{session?.user?.name}</Link>
              <LogoutButton />
            </>
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