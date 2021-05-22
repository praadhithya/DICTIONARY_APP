//http://localhost:19006/
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Text></Text>
      <AppContainer/>
    </View>
    </SafeAreaProvider>
  );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
});
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
