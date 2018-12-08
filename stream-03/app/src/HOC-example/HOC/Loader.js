import React from 'react';

export const withSpinnerLoader = (WrapperComponent) => {
  return class Loader extends React.Component {
    render() {
      console.log('RENDER HOC');
      const {contacts} = this.props;

      if (!contacts.length) {
        return <div className="loader"/>;
      }

      return <WrapperComponent {...this.props} />;
    }
  };
};
