import type React from "react"
import { Header } from "@/components/header"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {children}
    </div>
  )
}
