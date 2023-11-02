import * as React from 'react';
import './style.css';
import DOMPurify from 'dompurify';
import { test } from './test';
import FuncComp from './testfunc';
import Testclass from './testclass';

export default function App() {
  console.log('stuff happends');
  const testings = new test();
  testings.assign();
  testings.customHTML = `<script>alert(1)</script>`;

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
      {/* <div style={{ height: '500px', overflow: 'auto' }}>
        <p>{testings.customHTML}</p>
      </div>
      <div>
        <p>{santizeHTML}</p>
      </div> */}
      <FuncComp />
      <Testclass />
    </React.Fragment>
  );
}
