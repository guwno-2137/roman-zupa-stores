// Shop.js – totalnie defensywny, zero crashy
import ProductCard from './ProductCard';

export default function Shop({ products }) {
  // jeśli props brak, zawsze mamy pustą tablicę
  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <main className="collection">
      <section className="collection-header">
        <h1 className="collection-title">Kolekcja</h1>
        <p className="collection-subtitle">
          Ulica spotyka dziedzictwo. Limitowana forma, bez kompromisów.
        </p>
      </section>

      {safeProducts.length === 0 ? (
        <p className="collection-empty">
          Nowy drop w przygotowaniu – stay tuned! 🚀
        </p>
      ) : (
        <section className="collection-grid">
          {safeProducts.map((product) => (
            <ProductCard key={product.id || Math.random()} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}