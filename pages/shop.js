export default function Shop() {
  return (
    <main className="collection" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <section className="collection-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Kolekcja</h1>
        <p style={{ color: '#666', fontSize: '1rem' }}>
          Ulica spotyka dziedzictwo. Limitowana forma, bez kompromisów.
        </p>
      </section>

      <section className="collection-empty-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 2rem',
        border: '2px dashed #ff0044',
        borderRadius: '12px',
        background: '#fff8f8',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <p className="collection-empty" style={{
          textAlign: 'center',
          fontSize: '1.4rem',
          color: '#ff0044',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Nowy drop w przygotowaniu – stay tuned! 🚀
        </p>
        <img 
          src="/images/coming-soon.png" 
          alt="Nowy drop" 
          style={{ width: '150px', opacity: 0.7 }}
        />
      </section>
    </main>
  );
}