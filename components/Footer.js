export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-32">
      <div className="px-10 md:px-24 py-10 flex flex-col md:flex-row justify-between text-sm text-gray-400">

        {/* LEFT */}
        <span>
          © {new Date().getFullYear()} Roman Zupa
        </span>

        {/* RIGHT */}
        <span className="mt-4 md:mt-0 tracking-wide">
          Streetwear z akcentem szlacheckim
        </span>

      </div>
    </footer>
  );
}
