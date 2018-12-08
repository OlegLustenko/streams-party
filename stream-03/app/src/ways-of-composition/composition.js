import React, {Component} from 'react';

export class ChildComponent extends Component {
  render() {
    return <div>'IM Child</div>;
  }
}

export class ParentComponent_v1 extends Component {
  render() {
    return (
      <div>
        <main>Wrapper</main>
        {this.props.children}
      </div>
    );
  }
}
