"use client"

export default function LatestSection() {
  const features = [
    {
      icon: "⚙️",
      title: "Multi-Template & Multi-Language Support",
      description: "Enables developers to work across different technology stacks with a unified command interface.",
    },
    {
      icon: "🎯",
      title: "Interactive Configuration & Prompting",
      description: "Provides a user-friendly experience and minimizes errors from manual configuration.",
    },
    {
      icon: "📦",
      title: "Component & Module Generation",
      description: "Significantly speeds up repetitive coding tasks and enforces best practices.",
    },
    {
      icon: "🔌",
      title: "Extensible Post-Processing Pipeline",
      description: "Delivers a fully functional, ready-to-code project immediately after generation.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Download</h2>
            <p className="text-neutral-400 mb-6">
              The latest version of our CLI tool is now available for download on Linux. Get the latest features and
              improvements by downloading the latest release.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Download for Linux
            </button>
          </div>

          <div className="animate-fadeInRight">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Release</h2>
            <p className="text-neutral-400 mb-6">
              Check out the latest release of our CLI tool, packed with new features and improvements. See what's new
              and get the latest version.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              View Latest Release
            </button>
          </div>
        </div>

        <div className="relative py-20">
          {/* Glowing arc ellipse at top */}
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-5xl h-32 relative">
              {/* Glowing arc effect */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-500/20 via-orange-500/10 to-transparent rounded-b-3xl filter blur-2xl"></div>
              {/* Arc border line */}
              <svg viewBox="0 0 1000 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path
                  d="M 50 150 Q 500 50 950 150"
                  stroke="url(#arcGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 107, 53, 0)" />
                    <stop offset="50%" stopColor="rgba(255, 107, 53, 1)" />
                    <stop offset="100%" stopColor="rgba(255, 107, 53, 0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* About ScaffoldGen CLI section below arc */}
          <div className="relative max-w-5xl mx-auto mb-20">
            {/* Orange glow shadow behind the box */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 rounded-2xl blur-3xl -z-10"></div>

            {/* About section box */}
            <div className="grid lg:grid-cols-2 gap-12 items-start bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">About ScaffoldGen CLI</h3>
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  Our CLI tool is a powerful and versatile command-line interface that helps developers streamline their
                  workflow and boost their productivity. With a wide range of features and customization options, it's
                  the perfect tool for any developer looking to optimize their development process.
                </p>
                <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                  Learn More
                </button>
              </div>

              {/* Terminal code block */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 font-code text-neutral-400">
                  <div className="text-orange-400">{"> cd web_development"}</div>
                  <div className="text-orange-400">{"> scaffoldgen new **my-awesome-app** --template next"}</div>
                  <div className="text-orange-400">{"> scaffoldgen generate **component** UserProfile --i"}</div>
                  <div className="text-orange-400">{"> scaffoldgen create **route** auth --handler **login**"}</div>
                  <div className="text-green-400">{"> scaffoldgen config set **default-lang** python"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-orange-500/50 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
