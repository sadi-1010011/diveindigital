"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Logo from "@/public/images/logo.png";
import { usePathname } from "next/navigation"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 md:p-6 flex justify-between items-center z-10">
      {/* LOGO */}
      <Link href="/" className="block">
        <div className="absolute top-3 left-3 md:left-3 md:top-3 z-10">
            <Image src={Logo} width={96} height={96} alt="logo" className="w-24 h-auto" />
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLinks />
        {/* <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-blue-800"></div>
          <div className="w-2 h-2 rounded-full bg-blue-800"></div>
          <div className="w-2 h-2 rounded-full bg-blue-800"></div>
        </div> */}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          { !isMenuOpen ? <Menu size={24} /> : <X size={24} /> }
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md p-4 z-50 md:hidden">
          <div className="flex flex-col space-y-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks() {
  
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <>
      <Link href="/" className={`text-gray-700 hover:text-blue-800 transition-colors ${isActive("/") ? "font-bold" : ""}`}>
        Home
      </Link>
      <Link href="/service" className={`text-gray-700 hover:text-blue-800 transition-colors ${isActive("/service") ? "font-bold" : ""}`}>
        Services
      </Link>
      <Link href="/about-us" className={`text-gray-700 hover:text-blue-800 transition-colors ${isActive("/about-us") ? "font-bold" : ""}`}>
        About Us
      </Link>
      <Link href="/contact" className={`text-gray-700 hover:text-blue-800 transition-colors ${isActive("/contact") ? "font-bold" : ""}`}>
        Contact Us
      </Link>
    </>
  )
}
