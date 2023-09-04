"use client"

import Header from "@/components/basicos/Header"
import "./globals.css"

import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Footer from "@/components/basicos/Footer"

const poppins = Poppins({
  weight: ["100", "200", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alex Tristão",
  description:
    "Inovação, inclusão e parceria para o crescimento e expansão do IF Goiano Campus Catalão",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`
        relative bg-neutral-light dark:bg-neutral-dark text-secondary-dark dark:text-neutral-light
        ${poppins.className}
      `}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
          <div className="max-w-7xl mx-auto fixed top-[20px] z-10 left-0 right-0 px-5">
            <Header />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
