import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between space-x-4 p-4 bg-gray-800 text-white">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                
            </ul>
        </nav>
    )
}