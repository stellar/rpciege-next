import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = ({
  title = 'RPCiege',
  description = 'Conquer Fear, Forge Alliances, Become Unhackable.',
}: SEOProps) => {
  return (
    <Head>
      <link key="cononical" rel="canonical" href="https://rpciege.com/" />
      <meta key="og:url" property="og:url" content="https://rpciege.com/" />

      {title ? (
        <>
          <title>{title}</title>
          <meta key="og:title" property="og:title" content={title} />
          <meta key="og:site_name" property="og:site_name" content={title} />
          <meta key="twitter:title" name="twitter:title" content={title} />
        </>
      ) : null}

      {description ? (
        <>
          <meta key="description" name="description" content={description} />
          <meta key="og:description" property="og:description" content={description} />
          <meta key="twitter:description" name="twitter:description" content={description} />
        </>
      ) : null}

      <link key="icon" rel="icon" type="image/png" href="/favicon.png" />
      <link
        key="alternate icon"
        rel="alternate icon"
        href="/favicon.png"
        type="image/png"
        sizes="16x16"
      />
      <link key="apple-touch-icon" rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
      <link key="mask-icon" rel="mask-icon" href="/favicon.png" color="#DA2F11" />
      <meta key="theme-color" name="theme-color" content="#DA2F11" />

      <meta
        key="og:image"
        property="og:image"
        content="https://imagedelivery.net/g6Pj0V6gQzzMod63KwDUaw/909d1e4c-f585-4d05-9aaa-f73f5101f800/public"
      />
      <meta
        key="twitter:image:src"
        name="twitter:image:src"
        content="https://imagedelivery.net/g6Pj0V6gQzzMod63KwDUaw/909d1e4c-f585-4d05-9aaa-f73f5101f800/public"
      />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content="@sorobanofficial" />
      <meta key="twitter:creator" name="twitter:creator" content="@sorobanofficial" />
    </Head>
  );
};
