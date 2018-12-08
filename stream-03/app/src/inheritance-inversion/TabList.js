import React, {Component} from 'react';
import Tab, {TabDeclarativeWay} from './Tab';

const tabs = [];

export const styles = {
  tablist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: '2px solid gray',
  },
  disabled: {
    opacity: 0.5,
  },
  tabs: {
    background: '#ffff',
  },
  active: {
    borderBottom: '2px solid gray',
  },
};

class TabListOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: props.tabs,
      activeTabIndex: props.activeTabIndex || 0,
    };
  }

  setActive = (index) => {
    this.setState({
      activeTabIndex: index,
    });
  };

  render() {
    const content = this.state.tabs[this.state.activeTabIndex].content;
    return (
      <React.Fragment>
        <div style={styles.tablist}>
          {this.state.tabs.map((tab, index) => (
            <Tab
              tab={tab}
              activeTabIndex={this.state.activeTabIndex}
              index={index}
              setActive={this.setActive}
              isDisabled={this.props.disabled.includes(index)}
            />
          ))}
        </div>
        <section>{content}</section>
      </React.Fragment>
    );
  }
}

class TabListInheritanceInversion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: props.activeTabIndex || 0,
    };
  }

  setActive = (index) => {
    this.setState({
      activeTabIndex: index,
    });
  };

  render() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        isActive: this.state.activeTabIndex === index,
        setActive: () => this.setActive(index),
        tab: this.props.tabs[index],
      });
    });
  }
}

class TabList extends Component {
  render() {
    const content = this.props.tabs[0].content;
    const {tabs} = this.props;

    return (
      <React.Fragment>
        <div style={styles.tablist}>
          <TabListInheritanceInversion tabs={tabs}>
            <TabDeclarativeWay>
              <Tab />
            </TabDeclarativeWay>
            <TabDeclarativeWay>
              <Tab />
            </TabDeclarativeWay>
            <TabDeclarativeWay>
              <Tab />
            </TabDeclarativeWay>
          </TabListInheritanceInversion>
        </div>
        <section>{content}</section>
      </React.Fragment>
    );
  }
}

export default TabList;
