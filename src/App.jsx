import React, { StrictMode as Strict } from 'react';

import Routes from 'routes';
import Provider from 'store';

const App = () => (
  <Strict>
    <Provider>
      <Routes />
    </Provider>
  </Strict>
);

export default App;
