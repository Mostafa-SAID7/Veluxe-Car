import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"], display: 'swap', variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Veluxe | Luxury Car Rental',
  description: 'Premium luxury car rental service',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
