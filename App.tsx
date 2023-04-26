import * as React from 'react';
import './style.css';
import DOMPurify from 'dompurify';
import { test } from './test';

export default function App() {
  console.log('stuff happends');
  const testings = new test();
  testings.assign();

  var config: DOMPurify.Config = {
    FORCE_BODY: true,
    ADD_ATTR: ['style'],
  };
  let santizeHTML: string = DOMPurify.sanitize(
    testings.customHTML,
    config
  ) as string;
  return (
    <React.Fragment>
      <div style={{ height: '500px', overflow: 'auto' }}>
        <p>{testings.customHTML}</p>
      </div>
      <div>
        <p>{santizeHTML}</p>
      </div>
    </React.Fragment>
  );
}
