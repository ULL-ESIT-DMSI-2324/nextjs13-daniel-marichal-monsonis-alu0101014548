import Link from "next/link"
export default function NotFound() {
  return (
    <main className="center">
        <h2 className="text-center">Page not found</h2>
        <p>Are you lost?</p>
        <p>Go back to the <Link href="/">Dashboard</Link></p>
    </main>
  )
}
