import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import '../globalStylesheet.css';
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image';

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <main className={josefinSans.className + " min-h-screen"}>
        <div className="sticky w-full top-0 h-2 bg-right z-20">
          <Image
            src="/header_top_color.png"
            alt="Header Top Color"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
          // quality={100}
          />
        </div>
        <Component {...pageProps} key={router.asPath} />
      </main>
    </FaustProvider>
  );
}
