import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeadlineSync — Sync Assignment Deadlines Across Learning Platforms',
  description: 'Aggregate deadlines from Canvas, Blackboard, and Google Classroom into one smart calendar with priority scoring and notifications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05d24f8d-3439-4c9e-8046-8998cc75ab4e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
