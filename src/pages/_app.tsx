import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Merriweather } from 'next/font/google';
import Script from 'next/script';

import { QueryProvider } from '@/providers/QueryProvider';

import { BaseLayout } from '@/components/Layout/BaseLayout';
import { CookieConsent } from '@/components/CookieConsent';
import { ErrorFallback } from '@/components/Error/ErrorFallback';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import { SEO } from '@/components/SEO';

const nanumGothicCoding = localFont({
  src: [
    {
      path: '../assets/fonts/nanum-gothic-coding/NanumGothicCoding-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/nanum-gothic-coding/NanumGothicCoding-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
});

const merriweather = Merriweather({ weight: ['400'], subsets: ['latin'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorFallback>
      <SEO />

      <style jsx global>{`
        html {
          --font-nanum: ${nanumGothicCoding.style.fontFamily};
          --font-merriweather: ${merriweather.style.fontFamily};
        }
      `}</style>

      {/* Start of HubSpot Embed Code */}
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/8130068.js"
      ></Script>
      {/* End of HubSpot Embed Code */}

      <GoogleTagManager id="GTM-NG34QZS" />

      <QueryProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </QueryProvider>

      <CookieConsent />
    </ErrorFallback>
  );
}
