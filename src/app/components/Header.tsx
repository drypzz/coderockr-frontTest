import Link from 'next/link';
import { useState } from 'react';

import Contact from './Contact';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const [showModal, setShowModal] = useState<Boolean>(false);

    const openModal = () => {
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
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
                                <a onClick={openModal}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {showModal && <Contact onClose={closeModal} />}
        </>
    );
}
