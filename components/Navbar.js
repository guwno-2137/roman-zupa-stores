import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO + NAZWA */}
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <img
              src="/logo.png"
              alt="Roman Zupa"
              className="navbar-logo"
            />
            <span className="navbar-title">
              Roman Zupa
            </span>
          </a>
        </Link>

        {/* MENU */}
        <div className="navbar-menu">
          <Link href="/shop" legacyBehavior>
            <a>Kolekcja</a>
          </Link>

          <Link href="/cart" legacyBehavior>
            <a>Koszyk</a>
          </Link>

          <Link href="/admin" legacyBehavior>
            <a className="navbar-admin">Panel</a>
          </Link>
        </div>

      </div>
    </nav>
  );
}
