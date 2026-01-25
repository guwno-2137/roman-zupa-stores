import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import ProductCard from "../components/ProductCard";

export async function getServerSideProps() {
  const snapshot = await getDocs(collection(db, "products"));

  const products = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return {
    props: {
      products
    }
  };
}

export default function Shop({ products }) {
  return (
    <main className="px-10 md:px-24 py-24">
      <h1 className="text-4xl font-bold mb-16 tracking-tight">
        Kolekcja
      </h1>

      {products.length === 0 && (
        <p className="text-gray-500">
          Kolekcja w przygotowaniu.
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
