import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
        <div className="flex flex-col items-center">
        <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
