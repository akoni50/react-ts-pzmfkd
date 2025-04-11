import * as React from 'react';
import './style.css';
import DOMPurify from 'dompurify';
import { test } from './test';
import FuncComp from './testfunc';
import Testclass from './testclass';
import Testshadow from './testshadow';
import ReactDOM from 'react-dom';

export default function App() {
  console.log('stuff happends');
  const testings = new test();
  testings.assign();
  testings.customHTML = `<script>alert(1)</script>`;

  const [containerRender, setContainer] = React.useState(null);
  const [boolstate, setboolstate] = React.useState('parent');

  var config: DOMPurify.Config = {
    FORCE_BODY: true,
    ADD_ATTR: ['style'],
  };

  let santizeHTML: string = DOMPurify.sanitize(
    testings.customHTML,
    config
  ) as string;

  React.useEffect(() => {
    let container = document.getElementsByClassName('shadowhere')[0];
    let shadow = container.attachShadow({ mode: 'open' });
    setContainer(shadow);
  }, []);

  return (
    <React.Fragment>
      {/* <div style={{ height: '500px', overflow: 'auto' }}>
        <p>{testings.customHTML}</p>
      </div>
      <div>
        <p>{santizeHTML}</p>
      </div> */}
      <FuncComp boolstate={boolstate} />
      {/* <Testclass /> */}
      <br />
      <br />
      <div className="shadowhere"></div>

      {/* {containerRender &&
        ReactDOM.createPortal(<Testshadow />, containerRender)} */}
    </React.Fragment>
  );
}
