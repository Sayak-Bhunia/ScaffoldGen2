"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the ScaffoldGen CLI Tool?",
      answer:
        "ScaffoldGen is a powerful command-line interface designed to streamline your development workflow by automating project scaffolding, component generation, and configuration management.",
    },
    {
      question: "How do I install the ScaffoldGen CLI Tool?",
      answer:
        "Installation is simple! Download the appropriate version for your operating system from our downloads page, then follow the setup instructions for your platform.",
    },
    {
      question: "What features does the ScaffoldGen CLI Tool have?",
      answer:
        "ScaffoldGen includes multi-template support, interactive configuration, component generation, extensible post-processing pipelines, and multi-language support.",
    },
    {
      question: "How do I contribute to the Scaffolding CLI tool?",
      answer:
        "We welcome contributions! Visit our GitHub repository to fork the project, create a branch for your changes, and submit a pull request.",
    },
    {
      question: "Is the ScaffoldGen CLI tool free to use?",
      answer: "Yes! ScaffoldGen is completely free and open-source, available under the MIT license.",
    },
    {
      question: "Where can I get support?",
      answer:
        "Support is available through our documentation, GitHub issues, and community Discord server. Visit our support page for more information.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">FAQ</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glow-collapsible bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                openIdx === idx ? "active" : ""
              }`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <button className="w-full px-6 py-4 flex items-start justify-between hover:bg-neutral-800/30 transition text-left">
                <span className="font-semibold text-white text-sm leading-tight pr-2">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-orange-500 transition transform flex-shrink-0 mt-0.5 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 py-4 border-t border-neutral-800/50 bg-neutral-950/80 text-neutral-400 text-sm animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
