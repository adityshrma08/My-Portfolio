import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta tags for SEO */}
          <meta name="title" content="Aditya Sharma - Portfolio" />
          <meta name="description" content="Aditya Sharma's personal portfolio showcasing projects, skills, and achievements." />
          
          {/* Open Graph (OG) for social media */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Aditya Sharma - Portfolio" />
          <meta property="og:description" content="Explore Aditya Sharma's projects and technical skills in web development and beyond." />
          <meta property="og:image" content="/images/banner.png" />

          {/* Twitter Card */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Aditya Sharma - Portfolio" />
          <meta property="twitter:description" content="Check out Aditya Sharma's professional work and achievements." />
          <meta property="twitter:image" content="/images/banner.png" />

          {/* Remove Favicon */}
          <link rel="icon" href="data:," type="image/x-icon" />
          <meta name="favicon" content="none" />



        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
