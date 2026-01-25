import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const submitOrder = async () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length === 0) {
      alert("Koszyk jest pusty");
      return;
    }

    setLoading(true);

    await addDoc(collection(db, "orders"), {
      cart,
      createdAt: Date.now()
    });

    localStorage.removeItem("cart");
    setLoading(false);

    alert("Zamówienie przyjęte. Roman Zupa dziękuje.");
  };

  return (
    <main className="px-10 md:px-24 py-24 max-w-xl">
      <h1 className="text-4xl font-bold mb-12">
        Zamówienie
      </h1>

      <div className="space-y-6 mb-12">
        <input placeholder="Imię i nazwisko" />
        <input placeholder="Adres" />
        <input placeholder="Email" />
      </div>

      <button
        onClick={submitOrder}
        disabled={loading}
        className="w-full py-4 bg-gold text-black font-medium disabled:opacity-50"
      >
        {loading ? "Przetwarzanie..." : "Złóż zamówienie"}
      </button>
    </main>
  );
}
