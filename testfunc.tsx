import * as React from 'react';
import { btn_styles } from './Utilities';

/*
in this example math.random executes every time, this is the reason behind why stuff worked for femsec repo(fn component) and not for antispam repo(class component)
*/

//not components should always being with uppercase WTH typescript
const FuncComp = () => {
  const [change, setChange] = React.useState(0);
  const val = Math.random();

  function callme(): number {
    return change;
  }

  console.log('render_fn');

  return (
    <div>
      <h1>{val}</h1>
      <button
        style={btn_styles}
        onClick={() => {
          setChange(change + 1);
        }}
      >
        FUNCTION
      </button>
    </div>
  );
};

export default FuncComp;
