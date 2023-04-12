import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='mx-auto max-w-screen-2xl bg-gradient-to-br bg-blue-900 lg:px-32 md:px-12 px-5' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
