export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header> Header</header>
        {children}
        <footer> Footer </footer>
        </body>
    </html>
  )
}
