"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>ExSantara</title>
      <body className={inter.className}>
        <ProgressBar
          height="2px"
          color="#059669"
          options={{ showSpinner: false }}
          shallowRouting
          appDirectory
        />
        {children}
      </body>
    </html>
  )
}
