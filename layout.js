import './globals.css'

export const metadata = {
  title: 'Linga Global School — Knowledge is Power',
  description: 'Linga Global School, Krishnankoil — CBSE affiliated, empowering minds and enriching lives since 2015.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
