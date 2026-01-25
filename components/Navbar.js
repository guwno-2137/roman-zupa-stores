import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="flex justify-between items-center px-10 md:px-24 py-6">

        {/* LOGO */}
        <Link href="/">
          <span className="text-xl font-bold tracking-wide">
            ROMAN <span className="text-gold">ZUPA</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="flex items-center space-x-10 text-sm tracking-widest uppercase">

          <Link href="/shop">
            <span className="hover:text-gold transition cursor-pointer">
              Kolekcja
            </span>
          </Link>

          <Link href="/cart">
            <span className="hover:text-gold transition cursor-pointer">
              Koszyk
            </span>
          </Link>

          <Link href="/admin">
            <span className="border border-gold px-4 py-2 hover:bg-gold hover:text-black transition cursor-pointer">
              Panel
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
