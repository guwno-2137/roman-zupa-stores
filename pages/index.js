import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">

      {/* HERO */}
      <section className="flex-1 flex flex-col justify-center px-10 md:px-24">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none">
          ROMAN<br />
          <span className="text-gold">ZUPA</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-gray-300">
          Streetwear inspirowany szlachtą.  
          Honor. Surowość. Forma.
        </p>
      </section>

      {/* IMAGE / BRAND BLOCK */}
      <section className="px-10 md:px-24 pb-20">
        <div className="border-t border-gray-800 pt-10 flex justify-between items-end">
          <span className="text-sm text-gray-500">
            Est. 2026 · Polska
          </span>

          <Link href="/shop">
            <span className="text-lg tracking-wide hover:text-gold transition cursor-pointer">
              Kolekcja →
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
