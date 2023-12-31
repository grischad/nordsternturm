import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import TranslationSwitch from '../components/TranslationSwitch/TranslationSwitch';
import {
  Header,
  Footer,
  Main,
  Container,
  EntryHeader,
  NavigationMenu,
  ContentWrapper,
  FeaturedImage,
  SEO,
} from '../components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QrScanner } from '@yudiel/react-qr-scanner';
import QrToggle from '../components/QrToggle/QrToggle';
import { useConsentContext } from '../lib/ConsentContext';
import Image from 'next/image';

import CameraPermission from '../components/CameraPermission/CameraPermission';

export default function Component(props) {

  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [cameraStatus, setCameraStatus] = useState(false);
  // Loading state for previews
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(router.locale);
  const isPreviewRoute = router.route.includes('preview');
  const { openModal } = useConsentContext();

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('language');

    if (preferredLanguage && router.locale !== preferredLanguage && !isPreviewRoute) {


      const nextLang = translations.find(t => t.language.code.toLowerCase() === preferredLanguage);


      if (nextLang) {
        const newPath = `/${preferredLanguage}/${nextLang.slug}`;
        window.location.href = newPath;
        // router.push(nextLang.slug, undefined, { locale: preferredLanguage }) 
      }
      else { setShouldRenderContent(true); }

    } else {
      setShouldRenderContent(true);
    }
  }, [router.route]);

  if (props.loading) {
    return <>Loading...</>;
  }


  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenuDe = props?.data?.footerMenuItems?.nodes ?? [];
  const footerMenuEn = props?.data?.footerMenuItemsEn?.nodes ?? [];
  const footerMenu = router.locale === 'de' ? footerMenuDe : footerMenuEn;
  const { title, content, featuredImage, date, author, language, translations } = props.data.post;




  const cheerio = require('cheerio');

  const modifyContent = (htmlString) => {
    console.log("🚀 ~ file: single.js:76 ~ modifyContent ~ htmlString:", htmlString)
    if (typeof htmlString !== 'string') {
      console.error('htmlString is not a string:', htmlString);
      return '';
    }
    const platforms = ['youtube', 'vimeo', 'facebook', 'soundcloud', 'mixcloud'];
    const $ = cheerio.load(htmlString);

    $('iframe').each((index, iframe) => {
      const src = $(iframe).attr('src');
      const url = new URL(src);
      const sourceId = platforms.find((platform) => url.hostname.includes(platform)) || 'other';

      $(iframe).attr('data-name', sourceId);
      $(iframe).attr('data-src', src);
      $(iframe).removeAttr('src');

      $('figure.wp-block-embed').addClass('embed-clickable');
      $('div.wp-block-embed__wrapper').addClass('flex justify-center');

    });

    // Suche nach Elementen, die ein URL-Muster haben
    const urlPattern = /(http[s]?:\/\/[^\s]+)|(www\.[^\s]+)/g;
    $('*').contents().each((index, node) => {
      if (node.type === 'text') {
        const text = node.data;
        const newText = text.replace(urlPattern, '<span class="hyphens-none break-words">$&</span>');
        $(node).replaceWith(newText);
      }
    });


    return $.html();
  };
  const modifiedContent = modifyContent(content);

  useEffect(() => {
    const figures = document.querySelectorAll('.embed-clickable');
    figures.forEach(figure => {
      figure.addEventListener('click', openModal);
    });

    return () => { // Cleanup-Funktion
      figures.forEach(figure => {
        figure.removeEventListener('click', openModal);
      });
    };
  });

  if (!shouldRenderContent && !isPreviewRoute) {
    return null;
  }


  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      {/* <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      /> */}

      <Main>
        <>
          <div className="sticky w-full bg-white z-20 top-2 shadow-sm ">
            <div className="flex justify-between items-center">
              <TranslationSwitch translations={translations} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
              <div className="flex justify-between items-center gap-2">
                <CameraPermission language={currentLanguage} />
                <QrToggle showScanner={showScanner} setShowScanner={setShowScanner} />
              </div>
            </div>
            {showScanner && <QrScanner
              onDecode={(result) => {
                setShowScanner(false);
                window.location.href = result
              }}

              onError={(error) => { setShowScanner(false); console.log(error?.message) }}
            />}
          </div>

          <EntryHeader
            title={title}
            image={featuredImage?.node}
            date={date}
            author={author?.node?.name}

          />
          <Container>

            <ContentWrapper content={modifiedContent} />
          </Container>
        </>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPost(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $footerLocationEn: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      ...FeaturedImageFragment
      translations {
          slug
          uri
          language {
            code
          }
        }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItemsEn: menuItems(where: { location: $footerLocationEn }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    footerLocationEn: MENUS.FOOTER_LOCATION_EN,
    asPreview: ctx?.asPreview,
  };
};
