import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'README Conversion Tracker — Know Which Repos Drive Signups',
  description: 'Embed invisible tracking pixels in GitHub READMEs to measure which repositories drive the most signups for your developer tool.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d269c6d1-6f42-4138-9275-bb56d892dd60"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
