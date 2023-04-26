import * as React from 'react';
import './style.css';
import DOMPurify from 'dompurify';

export default function App() {
  console.log('stuff happends');

  let customHTML: string = `
  <script>
  console.log("loaded");
  </script>
  <style>
    h1 {color:red;}
    p {color:blue;}
  </style><div style="background-color:powderblue;" onmouseover=alert(1)>iam</div>`;

  var config: DOMPurify.Config = {
    FORCE_BODY: true,
  };
  let santizeHTML: string = DOMPurify.sanitize(customHTML, config) as string;
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
