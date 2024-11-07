import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="nav">
        <nav className="navbar">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/Deals" className="nav-link">Deals</Link>
            <Link href="/About" className="nav-link">About</Link>
            <Link href="/Contact" className="nav-link">Contact</Link>
        </nav>
        </div>
    );
}
