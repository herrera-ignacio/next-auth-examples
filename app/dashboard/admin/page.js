import { headers } from "next/headers";

export default async function Dashboard() {
  const res = await fetch(`${process.env.API}/admin`, {
    cache: "no-store",
    headers: new Headers(headers()) // required for req.auth on the API routes to work
  });
  const { message } = await res.json();
  return (
    <main>
      <div className="space-y-12 mt-1">
        <h1 className="text-base font-semibold leading-7 text-gray-900 text-center">Admin Dashboard</h1>
        <p className="text-base text-center">This route is for authenticated admins only!</p>
        {message && <p className="text-center text-green-600">{message}</p>}
      </div>
    </main>
  )
}