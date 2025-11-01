"use client"

import { Github, Linkedin, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/scaffoldgen-logo.png"
              alt="ScaffoldGen CLI"
              width={150}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-neutral-400 text-sm font-sans">
              A powerful CLI tool for developers to streamline their workflow and boost productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 font-sans">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                  Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white mb-4 font-sans">Connect with Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-500 transition">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500 font-sans">
          <p>&copy; 2025 ScaffoldGen CLI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
