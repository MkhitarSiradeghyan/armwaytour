import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EL6QKKQH7C" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-EL6QKKQH7C');
        `}
      </Script>
        
        <meta name="description" content="This is the official website of ArmWay Tour company"/>
        <title>ArmWay Tour</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <link
        async
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
        async
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </body>
    </Html>
  );
}
