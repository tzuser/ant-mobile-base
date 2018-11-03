import React, { Component } from 'react';

const changeSize = WrappedComponent => {
  return class ChangeSize extends Component {
    constructor(props) {
      super(props);
      this.reSizeHandle = this._reSizeHandle.bind(this);
      if (typeof window == 'undefined') {
        this.state = {
          width: 320,
          height: 568,
        };
      } else {
        this.state = {
          width: window.screen.availWidth,
          height: window.screen.availHeight,
        };
      }
    }
    _reSizeHandle() {
      this.setState({
        width: window.screen.availWidth,
        height: window.screen.availHeight,
      });
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.reSizeHandle);
    }

    componentDidMount() {
      window.addEventListener('resize', this.reSizeHandle);
    }
    render() {
      return <WrappedComponent {...this.props} sWidth={this.state.width} sHeight={this.state.height} />;
    }
  };
};

export default changeSize;
