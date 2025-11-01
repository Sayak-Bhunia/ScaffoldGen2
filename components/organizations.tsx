"use client"

export default function Organizations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Organizations</h2>

        <div className="flex justify-center">
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-12 hover:border-orange-500/50 transition w-full max-w-xs text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-6 text-xl group-hover:bg-orange-500/30 transition">
              🏢
            </div>
            <h3 className="text-xl font-bold text-white">Resourceio Community</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
