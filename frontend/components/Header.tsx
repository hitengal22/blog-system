import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4">
            <nav>
                <ul className="flex justify-center space-x-8">
                    <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}