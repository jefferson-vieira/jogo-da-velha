import React, { Component } from 'react';

import { normalizeBoolean } from 'utils';

import ComputerContext from './contexts/ComputerContext';

class Provider extends Component {
  // eslint-disable-next-line
  handleChange = context => ({ target: { name, value } }) => {
    this.setState(prevState => ({
      [context]: { ...prevState[context], [name]: normalizeBoolean(value) }
    }));
  };

  state = {
    computer: {
      isComputerActive: true,
      toggleComputerActive: this.handleChange('computer')
    }
  };

  render() {
    const { children } = this.props;
    const { computer } = this.state;

    return (
      <ComputerContext.Provider value={computer}>
        {children}
      </ComputerContext.Provider>
    );
  }
}

export default Provider;
