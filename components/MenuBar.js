import Link from 'next/link';

export function MenuBar() {
  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        <li className="menu-item">
          <Link href="/">
            <a className="menu-link">Home</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/upload">
            <a className="menu-link">Upload</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/export">
            <a className="menu-link">Export</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
