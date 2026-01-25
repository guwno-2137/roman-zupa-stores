import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group border border-gray-800 hover:border-gold transition cursor-pointer">

        {/* IMAGE */}
        <div className="aspect-[3/4] bg-[#111111] flex items-center justify-center">
          <span className="text-gray-600 text-sm">
            IMAGE
          </span>
        </div>

        {/* INFO */}
        <div className="p-4">
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            {product.name}
          </h3>

          <p className="mt-2 text-gold font-medium">
            {product.price} zł
          </p>
        </div>

      </div>
    </Link>
  );
}
