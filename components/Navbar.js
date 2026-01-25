
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* BRAND */}
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <img src="/logo.png" alt="Roman Zupa" className="navbar-logo" />
            <span className="navbar-title">Roman Zupa</span>
          </a>
        </Link>

        {/* BURGER */}
        <button
          className="navbar-burger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENU */}
        <div className={`navbar-menu ${open ? "open" : ""}`}>
          <Link href="/shop" legacyBehavior>
            <a onClick={() => setOpen(false)}>Kolekcja</a>
          </Link>

          <Link href="/cart" legacyBehavior>
            <a onClick={() => setOpen(false)}>Koszyk</a>
          </Link>

          <Link href="/admin" legacyBehavior>
            <a className="navbar-admin" onClick={() => setOpen(false)}>
              Panel
            </a>
          </Link>
        </div>

      </div>
    </nav>
  );
}
