//Imports
import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ children }) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>
				{children}
			</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#AAAAAA'
	},
	textStyle: {
		fontSize: 20
	}
};

export default Header;

