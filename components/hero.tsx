"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fadeInUp font-clash">
          ScaffoldGen
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-100 font-sans">
          A powerful command-line interface tool for developers, designed to streamline your workflow and boost your
          productivity
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp animation-delay-200">
          <button className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition transform hover:scale-105 font-sans">
            Download for Linux
          </button>
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500/10 transition font-sans">
            Download for Windows
          </button>
        </div>

        {/* Decorative arc */}
        <div className="relative h-32 mb-8 flex items-center justify-center">
          <svg viewBox="0 0 400 200" className="w-full max-w-2xl h-auto" preserveAspectRatio="xMidYMid meet">
            <path
              d="M 50 180 Q 200 20 350 180"
              stroke="url(#arcGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <ArrowDown className="w-6 h-6 text-orange-500" />
      </div>
    </section>
  )
}
