"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import LatestSection from "@/components/latest-section"
import Contributors from "@/components/contributors"
import GlobalUsers from "@/components/global-users"
import Organizations from "@/components/organizations"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black">
      <Header />
      <Hero />
      <LatestSection />
      <Features />
      <Contributors />
      <GlobalUsers />
      <Organizations />
      <FAQ />
      <Footer />
    </div>
  )
}
