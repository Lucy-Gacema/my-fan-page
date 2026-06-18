import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="top-nav-container">
      <Link href="/" className="nav-card-item">
         Home
      </Link>
      <Link href="/about" className="nav-card-item">
        ✨ About
      </Link>
    </nav>
  );
}
