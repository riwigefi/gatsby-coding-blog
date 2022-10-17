import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';

// import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';

import 'normalize.css';

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
