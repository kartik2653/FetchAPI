/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import MainScreen from './assets/screens/mainScreen';
import Progress from './assets/screens/loading';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState(['beautiful', 'amazing', 'grateful']);
  const changeState = val => {
    setLoading(val);
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading === false ? (
        <MainScreen changeIt={changeState} items={items} setItems={setItems} />
      ) : (
        <Progress />
      )}
    </SafeAreaView>
  );
};

export default App;
