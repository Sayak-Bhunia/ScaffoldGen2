"use client"

export default function LatestSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* About ScaffoldGen CLI section below arc */}
          <div className="relative max-w-5xl mx-auto mb-20">
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
        </div>
      </div>
    </section>
  )
}