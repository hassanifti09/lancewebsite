"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Button from './Button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import { createPortal } from "react-dom"
import { cdn } from '@/lib/cdn'

const DarkHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle scroll lock when menu is open
  useEffect(() => {
    setMounted(true)
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-row items-center justify-between px-2">
        <div className="w-[20%]">
          <Image src={cdn('lance-white-fav.svg')} alt="logo" width={320} height={320} />
        </div>
        <div className="w-[60%] flex items-center justify-center">
          <div className="w-min flex flex-row justify-between items-center gap-12 font-light text-lg rounded-full bg-white/95 backdrop-blur-sm  text-black px-8 py-3">
            <Link href="/" className="hover:text-black/80">Home</Link>
            <div className="relative group flex flex-col items-center">
              <div className="hover:text-black/80">About</div>
              <div className="absolute mt-12 text-center w-48 bg-white/95 backdrop-blur-sm  rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/about" className="block px-4 py-2 text-black cursor-pointer">About Us</Link>
                <Link href="/about#methodology" className="block px-4 py-2 text-black cursor-pointer">Our Methodology</Link>
                <Link href="/about#our-values" className="block px-4 py-2 text-black cursor-pointer">Our Values</Link>
              </div>
            </div>
            <Link href="/#services" className="hover:text-black/80">Services</Link>
            <Link href="/#projects" className="hover:text-black/80">Projects</Link>  
          </div>
        </div>
        <div className="w-[20%] flex items-center justify-end">
          <div className="w-min">
            <Button variant="white" route="/contact" text="Contact"/>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden rounded-full flex flex-row justify-between items-center px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30">
        <Image src={cdn('lance-white-fav.svg')} alt="logo" width={120} height={120} />
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {mounted && isMenuOpen && typeof window !== 'undefined' && createPortal(
        <div className="md:hidden fixed inset-0 z-50 bg-white backdrop-blur-md">
          {/* Close button */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 text-black p-2 hover:text-black/80"
          >
            <X size={32} />
          </button>
          <div className="h-full flex flex-col items-center justify-center space-y-8 text-black font-light">
            <Link href="/" className="text-3xl hover:text-black/80">Home</Link>
            <Link href="/about" className="text-3xl hover:text-black/80">About</Link>
            <Link href="/#services" className="text-3xl hover:text-black/80">Services</Link>
            <Link href="/#projects" className="text-3xl hover:text-black/80">Projects</Link>
            <div className="pt-8">
              <Button variant="black" route="/contact" text="Contact"/>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default DarkHeader