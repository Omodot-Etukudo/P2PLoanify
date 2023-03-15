import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='mx-auto max-w-screen-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 lowercase' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
