"use client"
import { useState } from "react"
import Arrow from "@/ui/Arrow"
import "./Navbar.css"
import Image from "next/image"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return <header className="navbar">
        <div className="top-strip">
            <span className="top-text">
                <Image className="element" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775660451/element-4_tvbvbe.png" alt="element" width={10} height={10} />
                Lorem ipsum dolor sit amet
            </span>
            <span className="top-text">
                <Image className="element" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775660451/element-4_tvbvbe.png" alt="element" width={10} height={10} />
                Lorem ipsum dolor sit amet
            </span>
            <span className="top-text">
                <Image className="element" src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775660451/element-4_tvbvbe.png" alt="element" width={10} height={10} />
                Lorem ipsum dolor sit amet
            </span>
        </div>
        <div className="nav-top">
            <button className="hamburger" onClick={() => { setIsOpen(!isOpen); console.log('isOpen:', !isOpen); }} aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
            </button>
            <div className="logo-left">
                <Image src="https://res.cloudinary.com/djae8jgjo/image/upload/v1775660611/Logo_aup28v.png" alt="Logo" width={25} height={25} />
            </div>

            <div className="logo-center">LOGO</div>
            <div className="nav-icons">
            {/* Search */}
            <button aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7"/>
                <line x1="16.5" y1="16.5" x2="22" y2="22"/>
                </svg>
            </button>

            {/* Wishlist */}
            <button aria-label="Wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            </button>

            {/* Bag */}
            <button aria-label="Bag">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
            </button>

            {/* User */}
            <button className="user-icon" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
                </svg>
            </button>
            <span className="lang-btn">ENG <Arrow /></span> 
            </div>
        </div>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a>SHOP</a>
            <a>SKILLS</a>
            <a>STORIES</a>
            <a>ABOUT</a>
            <a>CONTACT US</a>
        </nav>
    </header>
}
export default Navbar