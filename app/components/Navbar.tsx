"use client";

import  {useEffect, useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Navbar = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };  
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }
    , []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    const navLinks = (
        <>

            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-[roboto] ${pathname === "/" ? "text-blue-500" : "text-white hover:text-blue-500"}`} onClick={closeMenu}>
                Home
            </Link> 
            <Link href="/projects" className={`px-3 py-2 rounded-md text-sm font-[roboto] ${pathname === "/projects" ? "text-blue-500" : "text-white hover:text-blue-500"}`} onClick={closeMenu}>
                Projects
            </Link> 
            <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-[roboto] ${pathname === "/about" ? "text-blue-500" : "text-white hover:text-blue-500"}`} onClick={closeMenu}>
                About
            </Link> 
            <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-[roboto] ${pathname === "/contact" ? "text-blue-500" : "text-white hover:text-blue-500"}`} onClick={closeMenu}>
                Contact
            </Link>
        </>
    );

    return (

        <nav className=" bg-[#265494]/30 shadow-xl/30 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-[roboto] font-bold text-white">Aleš Smutník</Link>
                    </div>
                    <div className="hidden md:flex md:items-center">
                        {navLinks}
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={toggleMenu} className="text-white hover:text-white focus:outline-none focus:text-white">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMobile && isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks}
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Navbar;