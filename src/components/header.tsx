export default function Header() {
    return (
        <header className="p-6 flex flex-wrap justify-between items-center h-4">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-900">Fuerteventura Bliss Hotel</h1>
            <nav className="space-x-4 mt-4 md:mt-0">
                <a
                    href="#rooms"
                    className="text-white hover:underline hover:text-yellow-200 transition"
                >
                    Rooms
                </a>
                <a
                    href="#facilities"
                    className="text-white hover:underline hover:text-yellow-200 transition"
                >
                    Facilities
                </a>
                <a
                    href="#contact"
                    className="text-white hover:underline hover:text-yellow-200 transition"
                >
                    Contact
                </a>
            </nav>
        </header>
    )
}