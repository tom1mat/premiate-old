import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Axios from 'axios';
import Button from './reusable/Button';
import Input from './reusable/Input';
import MainApp from './MainApp';

class LogInForm extends Component {
	state = { email: '',
						password: '',
					 	animating: false
					}
	checkLogIn() {
		this.setState({ animating: true });
		Axios.get(`http://gruporodriguezhnos.com/backend_app_premiate/api_login.php?email=${this.state.email}&password=${this.state.password}`)
		.then((response) => {
				this.setState({ validation: response.data.status });
				this.setState({ animating: false });
				if (response.data.status === 200) {
					this.props.navigation.navigate('MainApp');
				}
			});
	}
	render() {
		return (
			<View style={styles.containerStyle}>
				<View style={{ height: 170 }}>
					<Input
						secureTextEntry={false}
						placeholder='user@gmail.com'
						label='Email'
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
					<Input
						secureTextEntry
						placeholder='Password'
						label='Password'
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
					<Button onPress={() => this.checkLogIn()}>
						Log In
					</Button>
					<Button onPress={() => this.props.navigation.navigate('CreateAccount')}>
						Registrarse
					</Button>
					<ActivityIndicator
              animating={this.state.animating}
              color='#bc2b78'
              size="large"
              style={styles.activityIndicator}
         />
				 <Text>
					 {this.state.validation}
				 </Text>
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	},
	activityIndicator: {
		marginTop: 10,
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 80
  }
};

export default LogInForm;
