"use client"

import Image from "next/image"

export default function Features() {
  const features = [
    {
      icon: "/f44.png",
      title: "Multi-Template & Multi-Language Support",
      description: "Enables developers to work across different technology stacks with a unified command interface.",
    },
    {
      icon: "/f22.png",
      title: "Interactive Configuration & Prompting",
      description: "Provides a user-friendly experience and minimizes errors from manual configuration.",
    },
    {
      icon: "/f11.png",
      title: "Component & Module Generation",
      description: "Significantly speeds up repetitive coding tasks and enforces best practices.",
    },
    {
      icon: "/f33.png",
      title: "Extensible Post-Processing Pipeline",
      description: "Delivers a fully functional, ready-to-code project immediately after generation.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-orange-500/50 transition group"
            >
              <div className="mb-4 group-hover:scale-110 transition">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
