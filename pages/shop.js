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
    <main className="collection">

      {/* HEADER */}
      <section className="collection-header">
        <h1 className="collection-title">
          Kolekcja
        </h1>

        <p className="collection-subtitle">
          Ulica spotyka dziedzictwo.  
          Limitowana forma, bez kompromisów.
        </p>
      </section>

      {/* EMPTY */}
      {products.length === 0 && (
        <p className="collection-empty">
          Nowy drop w przygotowaniu.
        </p>
      )}

      {/* GRID */}
      <section className="collection-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

    </main>
  );
}
