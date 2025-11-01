import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-clash",
})

export const metadata: Metadata = {
  title: "ScaffoldGen CLI - Developer Tool",
  description: "A powerful command-line interface tool for developers to streamline workflow and boost productivity",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
