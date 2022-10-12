import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import type { Language } from 'prism-react-renderer';

import vsDark from 'prism-react-renderer/themes/vsDark';

const CodeBlock: React.FC<{
  className: string;
  children: React.ReactNode;
}> = ({ children, className }) => {
  // Pull the className
  const language = className.replace(/language-/, '') || '';

  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language as Language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
