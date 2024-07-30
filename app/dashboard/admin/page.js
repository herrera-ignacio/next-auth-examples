export default function Dashboard() {
  return (
    <main>
      <div className="space-y-12 mt-1">
        <h1 className="text-base font-semibold leading-7 text-gray-900 text-center">Admin Dashboard</h1>
        <p className="text-base text-center">This route is for authenticated admins only!</p>
      </div>
    </main>
  )
}