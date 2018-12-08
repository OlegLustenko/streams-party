import React, {Component} from 'react';

import {
  ChildComponent,
  ParentComponent_v1,
} from './ways-of-composition/composition';
import {CounterRenderProps} from './ways-of-composition/render-props';
import {Header} from './ways-of-composition/slots';

import './App.css';
import {HOCExample} from './HOC-example/HOCExample';
import {withCounterHOC} from './ways-of-composition/counter-hoc';

import {CounterInversionInheritance} from './ways-of-composition/inversion-inheritance';

import TabList from './inheritance-inversion/TabList';

function CounterUI(props) {
  const {counter, increment, decrement} = props;

  return (
    <div>
      counter state: {counter}
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
}

const CounterHOC = withCounterHOC(CounterUI);

const tabs = [
  {header: 'JavaScript', content: 'Arrays, Objects'},
  {header: 'React', content: 'Component, HOCS, Render Props'},
  {header: 'Node.js', content: 'Buffer, Streams, Middlewares'},
];

class App extends Component {
  render() {
    return (
      <div>
        <TabList tabs={tabs} disabled={[1]}/>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <CounterInversionInheritance>
//           <CounterUI/>
//           <CounterUI/>
//         </CounterInversionInheritance>
//         <hr/>
//         <CounterHOC/>
//         <hr/>
//         <CounterRenderProps>
//           {({counter, increment, decrement}) => (
//             <CounterUI
//               counter={counter}
//               increment={increment}
//               decrement={decrement}
//             />
//           )}
//         </CounterRenderProps>
//       </div>
//     );
//   }
// }

/*<DropdownItem onClick={logOut}>log-out</DropdownItem>*/
/*{canSeeSynchronize && <DropdownItem onClick={synchronize}>synchronize</DropdownItem> }*/
/*{canSeeProfile && <DropdownItem onClick={about}>about</DropdownItem>*/
/*<DropdownItem onClick={profile}>profile</DropdownItem>*/

export default App;
