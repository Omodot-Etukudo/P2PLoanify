import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html suppressHydrationWarning lang="en">
      <Head />
      <body className='mx-auto max-w-screen-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 lg:px-28 md:px-12 px-5' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
