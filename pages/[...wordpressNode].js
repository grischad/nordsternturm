import { getWordPressProps, WordPressTemplate } from '@faustwp/core';

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export function getStaticProps(ctx) {
  ctx.res.setHeader('Cache-Control', 'no-store, max-age=0');
  return getWordPressProps({ ctx, revalidate: 10 });
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
