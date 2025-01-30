import { Inter } from "next/font/google"
import { CartProvider } from "@/components/providers/cartprovider"
import { AuthProvider } from "@/providers/authprovider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Enhanced Procurement Platform",
  description: "A comprehensive procurement platform built with Next.js and React",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

