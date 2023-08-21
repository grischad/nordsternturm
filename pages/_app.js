import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import '../globalStylesheet.css';
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <main className={josefinSans.className}>
        <Component {...pageProps} key={router.asPath} />
      </main>
    </FaustProvider>
  );
}
