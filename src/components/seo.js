import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site, images } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image {
              src
              width
              height
              alt
            }
          }
        }
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 650) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteTitle = title || site.siteMetadata.title;
  const ogImage = metaImage && metaImage.src ? metaImage : site.siteMetadata.image;
  const imageObject = images.edges.find((n) => n.node.relativePath.includes(ogImage.src));
  const image = `${site.siteMetadata.siteUrl}${imageObject.node.childImageSharp.fixed.src}`;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          ogImage
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: ogImage.width,
                },
                {
                  property: 'og:image:height',
                  content: ogImage.height,
                },
                {
                  property: 'og:image:alt',
                  content: ogImage.alt,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};

export default SEO;
