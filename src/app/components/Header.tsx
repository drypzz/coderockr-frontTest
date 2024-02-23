import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className={menuOpen ? "nav--open" : ""}>
                <div className="nav--content">
                    <Link href={"/"}>
                        <h1>Rockr Blog</h1>
                    </Link>
                </div>
                <div className="nav--content">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Posts</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
