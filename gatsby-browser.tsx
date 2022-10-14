// require('prismjs/themes/prism-okaidia.css');
// require('prismjs/plugins/line-numbers/prism-line-numbers.css');
// require('prismjs/plugins/command-line/prism-command-line.css');

import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';

// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
// import 'prismjs/plugins/command-line/prism-command-line.css';

import 'modern-normalize/modern-normalize.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  console.log('GatsbyBrowser---', element);

  return (
    <>
      {/* <h1>Hello World</h1> */}
      {element}
    </>
  );
};
