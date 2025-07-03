import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dive In Digital",
  description: "Digital marketing, website design, branding, and content creation services"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row h-screen">
          <main className="flex-1 flex flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
