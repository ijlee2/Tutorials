import React from 'react';
import { 
  StatusBar, 
  Platform, 
  StyleSheet, 
  View 
} from 'react-native';

import { StackNavigator, } from 'react-navigation';
import routes from './src/config/routes';

const RootNavigator = StackNavigator(routes);

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.app}>
        <RootNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})