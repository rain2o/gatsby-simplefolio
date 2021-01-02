import React from 'react';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SEO from '../components/seo';

const index = () => {
  const { lang } = headData;
  return (
    <>
      <SEO lang={lang} />
      <App />
    </>
  );
};

export default index;
