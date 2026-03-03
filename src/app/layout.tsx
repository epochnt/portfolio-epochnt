import type { Metadata } from 'next'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: 'Nitin Thakur',
  description: "Nitin thakur's portfolio (epochnt)",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
