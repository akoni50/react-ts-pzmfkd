import * as React from 'react';

interface mystate {
  renderme: string;
}

class Testclass extends React.Component<any, mystate> {
  constructor(props) {
    super(props);
    this.state = {
      renderme: 'class',
    };
  }
  private val = 'stuff class';

  public render() {
    return <h1>{this.state.renderme}</h1>;
  }
}

export default Testclass;
