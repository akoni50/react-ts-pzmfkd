import * as React from 'react';

//not components should always being with uppercase WTH typescript
const FuncComp = () => {
  const [change, setChange] = React.useState('func');

  return <h1>{change}</h1>;
};

export default FuncComp;
