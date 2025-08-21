import Link from "next/link";

export default function DashboardLayout({children}) {
  return (
    <div>
        <nav>
            <ul className="flex justify-end space-x-4 py-6 px-8 bg-slate-950 text-white ">
                <li>
                    <Link href="/signup">sign up</Link>
                </li>
                <li>
                    <Link href="/login">Log in</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
            </ul>
        </nav>
        {children}
    </div>
  )
}