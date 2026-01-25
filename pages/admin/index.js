import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="px-10 md:px-24 py-24">
      <h1 className="text-4xl font-bold mb-12">
        Panel Admina
      </h1>

      <div className="grid gap-6 max-w-md">
        <Link href="/admin/add-product">
          <div className="border border-gray-800 p-6 hover:border-gold transition cursor-pointer">
            <h2 className="text-lg font-semibold">
              Dodaj produkt
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Dodaj nowy element kolekcji
            </p>
          </div>
        </Link>

        <Link href="/admin/orders">
          <div className="border border-gray-800 p-6 hover:border-gold transition cursor-pointer">
            <h2 className="text-lg font-semibold">
              Zamówienia
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Podgląd zamówień klientów
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
