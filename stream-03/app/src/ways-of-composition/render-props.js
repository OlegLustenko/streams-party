import React, {Component} from 'react';

export class CounterRenderProps extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const passedRenderProps = {
      counter: this.state.counter,
      increment: this.incrementCounter,
      decrement: this.decrementCounter,
    };

    return this.props.children(passedRenderProps);
  }
}

export default CounterRenderProps;
