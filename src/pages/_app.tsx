import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Merriweather } from 'next/font/google';
import Script from 'next/script';

import { BaseLayout } from '@/components/Layout/BaseLayout';
import { QueryProvider } from '@/providers/QueryProvider';

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
    <>
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

      <QueryProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </QueryProvider>
    </>
  );
}
