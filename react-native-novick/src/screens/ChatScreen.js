import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class ChatScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
