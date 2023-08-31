import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import '../globalStylesheet.css';
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import klaroConfig from '../lib/klaro-config';
import '../styles/klaro.css';
import { ConsentWrapper } from '../lib/ConsentContext';

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [consents, setConsents] = useState({});
  const [klaroManager, setKlaroManager] = useState();
  const [klaroObject, setKlaroObject] = useState();

  useEffect(() => {
    const loadKlaro = async () => {
      const Klaro = await import("klaro/dist/klaro-no-css")
      Klaro.setup(klaroConfig);
      setKlaroManager(Klaro.getManager());
      setKlaroObject(Klaro)
    }
    loadKlaro();
    const setKlaroConsents = async () => {
      if (klaroManager) {
        let videoConsents = {}
        if (klaroManager?.getConsent('vimeo')) videoConsents = ({ ...videoConsents, vimeo: true });
        if (klaroManager?.getConsent('youtube')) videoConsents = ({ ...videoConsents, youtube: true });
        if (klaroManager?.getConsent('facebook')) videoConsents = ({ ...videoConsents, facebook: true });
        if (videoConsents !== consents) setConsents(videoConsents)
        let w1 = {
          update: function (obj, name, data) {
            if (name == "applyConsents") location.reload();
          }
        }
        klaroManager.watch(w1);
      }
    }
    setKlaroConsents();
  }, [])

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
        <ConsentWrapper openModal={() => klaroObject?.show()} consents={consents}>
          <Component {...pageProps} key={router.asPath} />
        </ConsentWrapper>
      </main>
    </FaustProvider>
  );
}
