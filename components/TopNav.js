import Link from "next/link";
import { auth } from "@/utils/auth";
import LogoutButton from "@/components/LogoutButton";
import { isAdmin } from "@/models/user";

export default async function TopNav() {
  const session = await auth();
  console.log(session?.user);

  return (
      <nav className="bg-gray-800">
        <div className="max-w-full flex items-stretch justify-center space-x-24 text-white">

          <Link href="/">Home</Link>

          {session ? (
            <>
              <Link href={`/dashboard${isAdmin(session?.user) ? "/admin" : ""}`}>{session?.user?.name}</Link>
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