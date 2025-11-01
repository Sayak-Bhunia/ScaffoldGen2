"use client"

import { useState, useEffect, useRef } from "react"

function CountUpNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(target * progress))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`count-${target}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [target, duration])

  return <span id={`count-${target}`}>{count.toLocaleString()}</span>
}

export default function GlobalUsers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-wide">Our Solutions</p>
          <h2 className="text-4xl font-bold text-white mt-2">Global Users</h2>
        </div>

        <div className="relative h-96 flex items-center justify-center">
          {/* Background gradient blur */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-orange-500/5 rounded-3xl blur-3xl"></div>

          {/* Main glass container */}
          <div className="relative w-full max-w-5xl h-80 bg-gradient-to-br from-neutral-800/40 via-neutral-900/20 to-neutral-950/40 border border-neutral-700/50 rounded-3xl backdrop-blur-xl overflow-hidden">
            {/* Floating mobile devices mockup */}
            <div className="absolute inset-0 flex items-center justify-center gap-8">
              {/* Left mobile */}
              <div className="hidden lg:block w-32 h-56 bg-gradient-to-br from-neutral-600/50 to-neutral-800/50 rounded-3xl border border-neutral-600/50 backdrop-blur-sm shadow-2xl transform -translate-x-16 -translate-y-8 opacity-70"></div>

              {/* Center main mobile */}
              <div className="relative w-40 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border-2 border-white/20 backdrop-blur-md shadow-2xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl"></div>
                <div className="p-4 pt-8 h-full flex flex-col justify-start gap-3">
                  <div className="w-full h-8 bg-white/10 rounded-lg"></div>
                  <div className="w-full h-12 bg-white/10 rounded-lg"></div>
                  <div className="w-3/4 h-6 bg-white/10 rounded-lg"></div>
                </div>
              </div>

              {/* Right mobile */}
              <div className="hidden lg:block w-32 h-56 bg-gradient-to-br from-neutral-600/50 to-neutral-800/50 rounded-3xl border border-neutral-600/50 backdrop-blur-sm shadow-2xl transform translate-x-16 translate-y-12 opacity-70"></div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-12 left-8 z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hover:border-orange-500/50 transition">
                <div className="text-orange-400 text-lg font-bold">
                  <CountUpNumber target={10000} />
                </div>
                <div className="text-white/70 text-xs">Active Projects</div>
              </div>
            </div>

            <div className="absolute top-1/3 right-12 z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hover:border-orange-500/50 transition">
                <div className="text-orange-400 text-lg font-bold">
                  <CountUpNumber target={2000000} />
                </div>
                <div className="text-white/70 text-xs">Installations</div>
              </div>
            </div>

            <div className="absolute bottom-16 left-12 z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hover:border-orange-500/50 transition">
                <div className="text-orange-400 text-lg font-bold">
                  <CountUpNumber target={25000} />
                </div>
                <div className="text-white/70 text-xs">Total Users</div>
              </div>
            </div>

            <div className="absolute bottom-20 right-8 z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl hover:border-orange-500/50 transition">
                <div className="text-orange-400 text-lg font-bold">
                  <CountUpNumber target={52000} />
                </div>
                <div className="text-white/70 text-xs">Global Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
