import * as React from 'react';

class Testshadow extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      change: 0,
    };
  }

  public componentDidMount() {
    console.log('didmount');
    console.log(document.getElementsByClassName('shadowhere'));
  }

  public render() {
    console.log('render_class');
    return (
      <div className="contentDiv">
        should be bold
        <style>
          {`	* {
                font-weight: bold;
              }
          `}
        </style>
      </div>
    );
  }
}

export default Testshadow;
