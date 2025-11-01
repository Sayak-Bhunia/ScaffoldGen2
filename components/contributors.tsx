"use client"

export default function Contributors() {
  const contributors = [
    { name: "Alex Chen", role: "AI Engineer", image: "/f1.jpeg" },
    { name: "Sarah Williams", role: "DevOps Lead", image: "/f2.jpeg" },
    { name: "Marcus Johnson", role: "Full Stack Developer", image: "/f3.jpeg" },
    { name: "Emma Davis", role: "Backend Architect", image: "/f4.jpeg" },
    { name: "Jordan Lee", role: "Cloud Infrastructure", image: "/f5.jpeg" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Major Contributors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {contributors.map((contributor, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-8 text-center hover:border-orange-500/50 transition transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img
                src={contributor.image || "/placeholder.svg"}
                alt={contributor.name}
                className="w-16 h-16 rounded-full mb-4 mx-auto object-cover border-2 border-orange-500/30 group-hover:border-orange-500 transition"
              />
              <h3 className="text-xl font-bold text-white mb-2">{contributor.name}</h3>
              <p className="text-neutral-400">{contributor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
