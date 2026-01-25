import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useRouter } from "next/router";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addProduct = async () => {
    if (!name || !price) {
      alert("Uzupełnij wszystkie pola");
      return;
    }

    setLoading(true);

    await addDoc(collection(db, "products"), {
      name,
      price,
      createdAt: Date.now()
    });

    setLoading(false);
    router.push("/admin");
  };

  return (
    <main className="px-10 md:px-24 py-24 max-w-xl">
      <h1 className="text-4xl font-bold mb-12">
        Dodaj produkt
      </h1>

      <div className="space-y-6">
        <input
          placeholder="Nazwa produktu"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Cena (PLN)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <button
        onClick={addProduct}
        disabled={loading}
        className="mt-10 px-8 py-4 bg-gold text-black font-medium disabled:opacity-50"
      >
        {loading ? "Dodawanie..." : "Dodaj produkt"}
      </button>
    </main>
  );
}
