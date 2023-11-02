import * as React from 'react';
import { btn_styles } from './Utilities';

interface mystate {
  change: number;
}
//even though render is called many times, math.random is executed only once

class Testclass extends React.Component<any, mystate> {
  constructor(props) {
    super(props);
    this.state = {
      change: 0,
    };
  }

  private val = Math.random();

  public render() {
    console.log('render_class');
    return (
      <div>
        <h1>{this.val}</h1>
        <button
          style={btn_styles}
          onClick={() => {
            this.setState({ change: this.state.change + 1 });
          }}
        >
          CLASS
        </button>
      </div>
    );
  }
}

export default Testclass;
