/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const index = ({ data }) => {
  const { domain, ogImage, title, lang, description } = headData;
  const image = data.images.edges.find((n) => n.node.relativePath.includes(ogImage.source));

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title itemProp="name" lang={lang || 'en'}>
          {title || 'Joel Rainwater'}
        </title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Full Stack Developer'} />
        <meta property="og:type" content="website" />
        {image && (
          <meta property="og:image" content={domain + image.node.childImageSharp.fixed.src} />
        )}
        {image && (
          <meta property="og:image:width" content={image.node.childImageSharp.fixed.width} />
        )}
        {image && (
          <meta property="og:image:height" content={image.node.childImageSharp.fixed.height} />
        )}
        <meta property="og:image:alt" content={ogImage.alt} />
        <link rel="canonical" href={domain} />
        <link rel="apple-touch-icon" href={`${domain}/icons/72x72.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${domain}/icons/72x72.png`} />
      </Helmet>
      <App />
    </>
  );
};

export const indexQuery = graphql`
  query {
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fixed(width: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

index.propTypes = {
  data: PropTypes.object,
};

export default index;
