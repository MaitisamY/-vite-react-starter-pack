import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaData = ({ 
    title,
    description,
    canonicalUrl,
    url,
    image,
    siteName,
    locale = 'en_US',
    twitterCard = 'summary',
    author,
    keywords,
    jsonLd 
}) => {

    return (
        <Helmet>
            {/* General Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={image} />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={locale} />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:image" content={image} />
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
};

export default MetaData
