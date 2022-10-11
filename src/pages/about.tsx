// Step 1: Import React
import * as React from 'react';
import Layout from '../components/Layout/index';
import Seo from '../components/Seo';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

// You can
export const Head = () => <Seo title='About Me'></Seo>;

// Step 3: Export your component
export default AboutPage;
