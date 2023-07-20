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

export default function Component(props) {

  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  // Loading state for previews
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(router.locale);
  const isPreviewRoute = router.route.includes('preview');


  useEffect(() => {
    const preferredLanguage = localStorage.getItem('language');

    if (preferredLanguage && router.locale !== preferredLanguage && !isPreviewRoute) {


      const nextLang = translations.find(t => t.language.code.toLowerCase() === preferredLanguage);


      if (nextLang) { router.push(nextLang.slug, undefined, { locale: preferredLanguage }) }
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
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content, featuredImage, date, author, language, translations } = props.data.post;





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
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <>
          <div className="flex justify-between">
            <TranslationSwitch translations={translations} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
            <QrToggle showScanner={showScanner} setShowScanner={setShowScanner} />
          </div>
          {showScanner && <QrScanner
            onDecode={(result) => { setShowScanner(false); window.location.href = result }}
            onError={(error) => { setShowScanner(false); console.log(error?.message) }}
          />}
          <EntryHeader
            title={title}
            image={featuredImage?.node}
            date={date}
            author={author?.node?.name}
          />
          <Container>

            <ContentWrapper content={content} />
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
  }
`;

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};
