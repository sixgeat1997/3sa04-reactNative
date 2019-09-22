import React from 'react';
import Weather from './component/weather'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Weather zipCode="90110" />
      </View>
    );
  }
}