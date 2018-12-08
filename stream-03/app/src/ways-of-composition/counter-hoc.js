import React from 'react';

export const withCounterHOC = (WrappedComponent) => {
  return class Counter extends React.Component {
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
      const mergedProps = {
        ...this.props,
        counter: this.state.counter,
        increment: this.incrementCounter,
        decrement: this.decrementCounter,
      };

      return <WrappedComponent {...mergedProps} />;
    }
  };
};
