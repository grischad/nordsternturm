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
import { WordPressBlocksViewer } from '@faustwp/blocks';
import blocks from "../wp-blocks";
import flatListToHierarchical from "../utils/flatListToHierarchical";
import getFragmentDataFromBlocks from "../utils/getFragmentDataFromBlocks";

export default function Component(props) {



  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content, featuredImage, date, author, language, translations, editorBlocks } = props.data.post;
  console.log("🚀 ~ file: single.js:35 ~ Component ~ translations:", translations)
  const blocks = flatListToHierarchical(editorBlocks);
  const router = useRouter();

  useEffect(() => {
    const preferredLanguage = localStorage.getItem('language');


    if (preferredLanguage && router.locale !== preferredLanguage) {


      const nextLang = translations.find(t => t.language.code.toLowerCase() === preferredLanguage);

      router.push(`/${nextLang.slug}`, undefined, { locale: nextLang.language.code.toLowerCase() });


    } else {
      setShouldRenderContent(true);
    }
  }, []);

  if (!shouldRenderContent) {
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
          <dic className="flex justify-between">
            <TranslationSwitch translations={translations} />
            <QrToggle showScanner={showScanner} setShowScanner={setShowScanner} />
          </dic>
          {showScanner && <QrScanner
            onDecode={(result) => router.push(result)}
            onError={(error) => console.log(error?.message)}
          />}
          <EntryHeader
            title={title}
            image={featuredImage?.node}
            date={date}
            author={author?.node?.name}
          />
          <Container>
            <h2>ContentWrapper:</h2>
            <ContentWrapper content={content} />
            <hr className="my-8" />
            <h2>WordPressBlocksViewer</h2>
            <WordPressBlocksViewer blocks={blocks} />
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
  ${getFragmentDataFromBlocks(blocks).entries}
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
      editorBlocks {
          cssClassNames
          isDynamic
          name
          id: clientId
          parentId: parentClientId
          renderedHtml

          # Get all block fragment keys and call them in the query
          ${getFragmentDataFromBlocks(blocks).keys}
        }
      ...FeaturedImageFragment
      translations {
          slug
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
