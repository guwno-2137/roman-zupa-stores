import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export async function getServerSideProps({ params }) {
  const ref = doc(db, "products", params.id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return { notFound: true };
  }

  return {
    props: {
      product: snap.data(),
      id: params.id
    }
  };
}

export default function ProductPage({ product, id }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push({
      id,
      name: product.name,
      price: product.price
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Dodano do koszyka");
  };

  return (
    <main className="px-10 md:px-24 py-24 grid md:grid-cols-2 gap-16">

      {/* IMAGE */}
      <div className="aspect-[3/4] bg-[#111111] flex items-center justify-center">
        <span className="text-gray-600">IMAGE</span>
      </div>

      {/* INFO */}
      <div>
        <h1 className="text-4xl font-bold uppercase tracking-wide">
          {product.name}
        </h1>

        <p className="mt-6 text-2xl text-gold">
          {product.price} zł
        </p>

        <p className="mt-8 text-gray-400 max-w-md">
          Produkt premium. Bawełna ciężka.
          Krój uliczny z akcentem szlacheckim.
        </p>

        <button
          onClick={addToCart}
          className="mt-10 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition"
        >
          Dodaj do koszyka
        </button>
      </div>

    </main>
  );
}
