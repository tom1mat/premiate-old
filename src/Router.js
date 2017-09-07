import React from 'react';
import { TabNavigator } from 'react-navigation';
import LogIn from './LogIn';
import MainApp from './MainApp';
import CreateAccount from './CreateAccount';

export const Router = TabNavigator({
  LogIn: {
    screen: LogIn
  },
  MainApp: {
    screen: MainApp
  }
});
