import * as React from 'react';
import { btn_styles } from './Utilities';

/*
in this example math.random executes every time, this is the reason behind why stuff worked for femsec repo(fn component) and not for antispam repo(class component)
*/

export interface FuncCompProps {
  boolstate: string;
}

//not components should always being with uppercase WTH typescript
const FuncComp = (props: FuncCompProps) => {
  const [change, setChange] = React.useState(0);
  const [childboolstate, setchildboolstate] = React.useState<string>(
    props.boolstate
  );
  const val = Math.random();
  const booltest = false;

  function callme(): number {
    return change;
  }

  React.useEffect(() => {
    console.log('props container Render: ' + props.boolstate);
    setchildboolstate(props.boolstate);
  }, [props.boolstate]);

  React.useEffect(() => {
    console.log('state container Render: ' + childboolstate);
  }, [childboolstate]);

  // console.log('render_fn');

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
      <br />
      <br />
      <div>stuff: {childboolstate}</div>
    </div>
  );
};

export default FuncComp;
