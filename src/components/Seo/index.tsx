import * as React from 'react';

import useSiteMetadata from '../../hooks/useSiteMetadata';

const Seo: React.FC<{
  title: string;
}> = ({ title }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <title>
      {title} | {siteMetadata.title}
    </title>
  );
};

export default Seo;
