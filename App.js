import React from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import RootContainer from './src/containers/RootContainer';
import store from './src/redux/store';

class App extends React.Component {

  render () {
    return (
        <Provider store={store}>
          <RootContainer />
        </Provider>
    )
  }
}

export default App