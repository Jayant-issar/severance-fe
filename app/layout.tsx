import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import QueryProvider from "@/providers/QueryProvider"

export const metadata: Metadata = {
  title: "Severance - Practice Backend Questions & Learn by Doing",
  description:
    "Master server-side development through hands-on backend questions and interactive assignments. Practice backend concepts with real-world scenarios and build your skills.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        
        <QueryProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
