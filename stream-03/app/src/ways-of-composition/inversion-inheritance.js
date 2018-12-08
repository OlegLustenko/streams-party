import React, {Component} from 'react';

class InversionInheritance extends Component {
  render() {
    return React.cloneElement(this.props.children, {
      autoFocus: true,
    });
  }
}

export class CounterInversionInheritance extends Component {
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

    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, passedRenderProps);
    });
  }
}
