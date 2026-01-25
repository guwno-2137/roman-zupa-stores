import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebase";

export async function getServerSideProps() {
  const q = query(
    collection(db, "orders"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  const orders = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return {
    props: {
      orders
    }
  };
}

export default function Orders({ orders }) {
  return (
    <main className="px-10 md:px-24 py-24">
      <h1 className="text-4xl font-bold mb-12">
        Zamówienia
      </h1>

      {orders.length === 0 && (
        <p className="text-gray-500">
          Brak zamówień.
        </p>
      )}

      <div className="space-y-10">
        {orders.map(order => (
          <div
            key={order.id}
            className="border border-gray-800 p-6"
          >
            <p className="text-sm text-gray-500 mb-4">
              ID: {order.id}
            </p>

            <ul className="space-y-2">
              {order.cart.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="uppercase">
                    {item.name}
                  </span>
                  <span className="text-gold">
                    {item.price} zł
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
