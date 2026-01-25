import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <main className="px-10 md:px-24 py-24">
      <h1 className="text-4xl font-bold mb-16">
        Koszyk
      </h1>

      {cart.length === 0 && (
        <p className="text-gray-500">
          Koszyk jest pusty.
        </p>
      )}

      {cart.length > 0 && (
        <>
          <div className="space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-800 pb-6"
              >
                <div>
                  <p className="uppercase tracking-wide">
                    {item.name}
                  </p>
                  <p className="text-gold">
                    {item.price} zł
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-gray-500 hover:text-red-500 transition"
                >
                  Usuń
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-between items-center">
            <p className="text-xl">
              Suma: <span className="text-gold">{total} zł</span>
            </p>

            <Link href="/checkout">
              <button className="px-8 py-4 bg-gold text-black font-medium">
                Przejdź dalej
              </button>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
