import './globals.css'
import localfont from "next/font/local"

export const metadata = {
  title: 'Results',
  description: 'Results summary component',
}

const font = localfont({
    src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
    display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} md:h-screen md:bg-very-light-blue md:flex items-center justify-center`}>{children}</body>
    </html>
  )
}
