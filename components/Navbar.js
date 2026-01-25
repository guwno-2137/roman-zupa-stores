import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="flex justify-between items-center px-10 md:px-24 py-6">

        {/* LOGO */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-3 cursor-pointer">
            <img
              src="/Public/Untitled5_20260120220021.png"
              alt="Roman Zupa"
              className="h-8 md:h-10 object-contain"
            />
          </a>
        </Link>

        {/* MENU */}
        <div className="flex items-center space-x-10 text-sm tracking-widest uppercase">

          <Link href="/shop" legacyBehavior>
            <a className="hover:text-gold transition">
              Kolekcja
            </a>
          </Link>

          <Link href="/cart" legacyBehavior>
            <a className="hover:text-gold transition">
              Koszyk
            </a>
          </Link>

          <Link href="/admin" legacyBehavior>
            <a className="border border-gold px-4 py-2 hover:bg-gold hover:text-black transition">
              Panel
            </a>
          </Link>

        </div>
      </div>
    </nav>
  );
}
