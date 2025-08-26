import Head from "next/head"

interface MetaTagsProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
}

export function MetaTags({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
}: MetaTagsProps) {
  const fullTitle = title.includes("Johannesburg Tech Repair") ? title : `${title} | Johannesburg Tech Repair`
  const baseUrl = "https://johannesburgtechrepair.online"
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Johannesburg Tech Repair" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO Tags */}
      <meta name="author" content="Johannesburg Tech Repair" />
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Johannesburg" />
      <meta name="geo.position" content="-26.2041;28.0473" />
      <meta name="ICBM" content="-26.2041, 28.0473" />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
