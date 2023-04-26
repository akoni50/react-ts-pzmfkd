import * as React from 'react';
import './style.css';
import DOMPurify from 'dompurify';

export default function App() {
  console.log('stuff happends');

  let customHTML = '<div onmouseover=alert(1)>iam</div>';

  let santizeHTML = DOMPurify.sanitize(customHTML);
  return (
    <React.Fragment>
      <div>
        <p>{customHTML}</p>
      </div>
      <div>
        <p>{santizeHTML}</p>
      </div>
    </React.Fragment>
  );
}
