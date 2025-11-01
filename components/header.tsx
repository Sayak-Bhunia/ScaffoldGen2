"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image src="/scaffoldgen-logo.png" alt="ScaffoldGen CLI" width={150} height={40} className="h-10 w-auto" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition">
              Downloads
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition">
              Releases
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition">
              Docs
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
            />
          </div>
          <a href="#" className="text-neutral-400 hover:text-white transition">
            Snippet Manager
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 p-4">
          <a href="#" className="block py-2 text-neutral-400 hover:text-white">
            Downloads
          </a>
          <a href="#" className="block py-2 text-neutral-400 hover:text-white">
            Releases
          </a>
          <a href="#" className="block py-2 text-neutral-400 hover:text-white">
            Docs
          </a>
        </div>
      )}
    </header>
  )
}
