import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import { db, storage, auth } from "../../lib/firebase";
import { useRouter } from "next/router";

export default function AddProduct() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  /* 🔐 AUTH GUARD */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
        setCheckingAuth(false);
      }
    });

    return () => unsub();
  }, []);

  /* ⛔ CZEKAJ NA AUTH */
  if (checkingAuth) {
    return (
      <main className="px-10 py-32 text-gray-400">
        Sprawdzanie dostępu…
      </main>
    );
  }

  /* ➕ ADD PRODUCT */
  const addProduct = async () => {
    if (!name || !price || !image) {
      alert("Uzupełnij nazwę, cenę i zdjęcie");
      return;
    }

    try {
      setLoading(true);

      // upload image
      const imageRef = ref(
        storage,
        `products/${Date.now()}-${image.name}`
      );
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // save product
      await addDoc(collection(db, "products"), {
        name,
        price,
        imageUrl,
        createdAt: Date.now(),
      });

      alert("Produkt dodany");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      alert("Błąd przy dodawaniu produktu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="px-10 md:px-24 py-32 max-w-xl">
      <h1 className="text-4xl font-bold mb-12">
        Dodaj produkt
      </h1>

      <div className="space-y-8">

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

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

      </div>

      <button
        onClick={addProduct}
        disabled={loading}
        className="mt-12 px-10 py-4 bg-gold text-black font-medium disabled:opacity-50"
      >
        {loading ? "Dodawanie..." : "Dodaj produkt"}
      </button>
    </main>
  );
}
