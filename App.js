import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainApp from './src/MainApp';
import LogIn from './src/LogIn';
import CreateAccount from './src/CreateAccount';
import VideoPlayer from './src/VideoPlayer';

{/*class App extends React.Component {
  static navigationOptions = {
      gesturesEnabled: false,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('LogIn')}
        />
      </View>
    );
  }
}*/ }
const SimpleApp = StackNavigator(
  {
    VideoPlayer: { screen: VideoPlayer },
    LogIn: { screen: LogIn },
    CreateAccount: { screen: CreateAccount },
    MainApp: { screen: MainApp },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      cardStack: {
        gesturesEnabled: false,
      }
    },
    headerMode: 'none'
  },
);

SimpleApp.navigationOptions = {
  gesturesEnabled: false,
  cardStack: {
    gesturesEnabled: false,
  }
};
LogIn.navigationOptions = {
  title: 'Log In',
};
CreateAccount.navigationOptions = {
  headerMode: 'screen',
  title: 'MainApp',
};

export default SimpleApp;
