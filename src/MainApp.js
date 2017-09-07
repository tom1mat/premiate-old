import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sorteos from './Sorteos';
import Barra from './Barra';
import User from './User';
import Game from './Game';

export default class MainApp extends React.Component {
  state = { currentSection: 'sorteos' };
  componentDidMount() {
    
  }
  changeSection(section) {
    this.setState({ currentSection: section });
  }
  renderSection() {
    if (this.state.currentSection === 'sorteos') {
      return <Sorteos />;
    } else if (this.state.currentSection === 'game') {
      return <Game />;
    } else if (this.state.currentSection === 'user') {
      return <User />;
    }
  }
  render() {
    return (
      <View>
        <Barra changeSection={this.changeSection.bind(this)} />
        <View>
          {this.renderSection()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
