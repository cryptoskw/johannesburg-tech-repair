import Script from "next/script"

interface LocalBusinessSchemaProps {
  name: string
  description: string
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  telephone: string
  email: string
  url: string
  serviceArea?: string[]
  services?: string[]
}

export function LocalBusinessSchema({
  name,
  description,
  address,
  telephone,
  email,
  url,
  serviceArea = [],
  services = [],
}: LocalBusinessSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    name,
    description,
    url,
    telephone,
    email,
    ...(address && {
      address: {
        "@type": "PostalAddress",
        ...address,
      },
    }),
    ...(serviceArea.length > 0 && {
      areaServed: serviceArea.map((area) => ({
        "@type": "City",
        name: area,
      })),
    }),
    ...(services.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Computer Repair Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        })),
      },
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "ZAR",
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface ServiceSchemaProps {
  serviceName: string
  description: string
  provider: string
  areaServed: string[]
  url: string
}

export function ServiceSchema({ serviceName, description, provider, areaServed, url }: ServiceSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: provider,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "ZAR",
      priceRange: "$$",
    },
  }

  return (
    <Script
      id={`service-schema-${serviceName.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface StructuredDataProps {
  type: "LocalBusiness" | "Service" | "ContactPage" | "AboutPage"
  serviceName?: string
  serviceDescription?: string
}

export function StructuredData({ type, serviceName, serviceDescription }: StructuredDataProps) {
  if (type === "LocalBusiness") {
    return (
      <LocalBusinessSchema
        name="Johannesburg Tech Repair"
        description="Professional computer and laptop repair services in Johannesburg. Same-day repairs, 90-day warranty, free pickup and delivery."
        address={{
          addressLocality: "Johannesburg",
          addressRegion: "Gauteng",
          addressCountry: "ZA",
        }}
        telephone="+27123456789"
        email="info@johannesburgtechrepair.online"
        url="https://johannesburgtechrepair.online"
        serviceArea={["Johannesburg", "Sandton", "Rosebank", "Fourways", "Randburg"]}
        services={["Laptop Repair", "Computer Repair", "Virus Removal", "Data Recovery", "Same-Day IT Support"]}
      />
    )
  }

  if (type === "Service" && serviceName && serviceDescription) {
    return (
      <ServiceSchema
        serviceName={serviceName}
        description={serviceDescription}
        provider="Johannesburg Tech Repair"
        areaServed={["Johannesburg", "Sandton", "Rosebank", "Fourways", "Randburg"]}
        url="https://johannesburgtechrepair.online"
      />
    )
  }

  if (type === "ContactPage" || type === "AboutPage") {
    return (
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://johannesburgtechrepair.online" },
          {
            name: type === "ContactPage" ? "Contact" : "About",
            url: `https://johannesburgtechrepair.online/${type === "ContactPage" ? "contact" : "about"}`,
          },
        ]}
      />
    )
  }

  return null
}
