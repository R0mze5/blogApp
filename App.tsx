import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from 'navigation/AppNavigation';
import { AppLoading } from 'expo';

import { Provider } from 'react-redux';
import { store } from 'store';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     flex: 1,
//     justifyContent: 'center',
//   },
// });
