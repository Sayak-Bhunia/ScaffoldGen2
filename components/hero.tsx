"use client"

import Image from "next/image"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        {/* Orange glow shadow behind the box */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl relative h-116">
            <Image src="/glow-ellipse.png" alt="Glowing ellipse" fill className="object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
