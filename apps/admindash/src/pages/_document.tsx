import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/></Head>
      <body>
        <Main />
        <NextScript/>
      </body>
      <script src="https://unpkg.com/tailwindcss-cdn@3.3.4/tailwindcss.js"></script>
       
    </Html>
  );
}
