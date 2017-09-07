import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import EmailValidator from 'email-validator';
import axios from 'axios';
import Button from './reusable/Button';
import Input from './reusable/Input';


class CreateAccount extends Component {
	static navigationOptions = {
			gesturesEnabled: false,
			headerMode: 'screen'
	};
	state = { username: 'tomi',
            email: 'tomi@tomi.com',
            password: 'tomi',
            validation: '',
            animating: false
  }

  componentDidMount = () => this.closeActivityIndicator();

  closeActivityIndicator = () => setTimeout(() => this.setState({ animating: false }), 6000);
	changeAnimatingState(estado) {
		this.setState({ animating: estado });
	}
  validateForm() {
		this.changeAnimatingState(true);
    this.setState({ validation: '' });
    if (EmailValidator.validate(this.state.email)) {
			if (this.state.username.length > 3) {
				axios.get(`http://gruporodriguezhnos.com/backend_app_premiate/api_validar_email.php?email=${this.state.email}`)
				.then((response) => {
					this.changeAnimatingState(false);
					if (response.data.status === 200) {
						this.setState({ validation: 'Ya hay una cuenta vinculada con ese email' });
					} else if (response.data.status === 400) {
						this.setState({ validation: 'EMAIL OK' });
						axios.get(`http://gruporodriguezhnos.com/backend_app_premiate/api_validar_user.php?user=${this.state.username}`)
						.then((response2) => {
							if (response2.data.status === 200) {
								this.setState({ validation: 'Usuario existente' });
							} else if (response2.data.status === 400) {
								this.setState({ validation: 'USER OK' });
								this.changeAnimatingState(true);
								axios.get(`http://gruporodriguezhnos.com/backend_app_premiate/api_create_user.php?user=${this.state.username}&password=${this.state.password}&email=${this.state.email}`)
								.then((response3) => {
										if (response3.data.status === 200) {
											this.changeAnimatingState(false);
											this.setState({ validation: 'USUARIO CREADO' });
											this.props.navigation.navigate('LogIn');
										}
									});
							}
						});
					}
				});
			} else {
				this.setState({ animating: false });
				this.setState({ validation: 'El usuario debe tener más de 3 digitos' });
			}
    } else {
			this.setState({ animating: false });
      this.setState({ validation: 'Email inválido' });
    }
  }

	render() {
		return (
			<View style={styles.containerStyle}>
				<View style={{ height: 170 }}>
					<Input
						secureTextEntry={false}
						placeholder='username'
						label='username'
						value={this.state.username}
						onChangeText={username => this.setState({ username })}
					/>
	        <Input
							secureTextEntry={false}
							placeholder='email'
							label='email'
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
					<Button onPress={() => this.validateForm()}>
						Crear cuenta
					</Button>
          <ActivityIndicator
              animating={this.state.animating}
              color='#bc2b78'
              size="large"
              style={styles.activityIndicator}
          />
          <Text style={styles.loginText} >
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

export default CreateAccount;
