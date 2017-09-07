import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import NavBar, { NavButton, NavTitle } from 'react-native-nav';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#6088e8',
  },
  navBar: {
    backgroundColor: '#6088e8',
  },
  title: {
    color: '#E7259C',
  },
  buttonText: {
    color: 'rgba(231, 37, 156, 0.5)',
  },
  navButton: {
    flex: 1,
  },
  image: {
    width: 30,
  },
});

export default class NavBarIOSColored extends Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavButton style={styles.navButton} onPress={() => this.props.changeSection('home')}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('./imgs/home.png')}
          />
        </NavButton>
        <NavButton style={styles.navButton} onPress={() => this.props.changeSection('sorteos')}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('./imgs/medalBig.png')}
          />
        </NavButton>
        <NavButton style={styles.navButton} onPress={() => this.props.changeSection('game')}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('./imgs/trophyBig.png')}
          />
        </NavButton>
        <NavButton style={styles.navButton} onPress={() => this.props.changeSection('user')}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('./imgs/profile.png')}
          />
        </NavButton>
      </NavBar>
    );
  }
}
