import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Button from './reusable/Button';


class Sorteos extends Component {

	state = { sorteos: [] };

	componentWillMount() {
		axios.get('http://gruporodriguezhnos.com/backend_app_premiate/api_mostrar_sorteos.php')
			.then(response => this.setState({ sorteos: response.data.data }));
	}

	renderSorteos() {
		return this.state.sorteos.map(sorteo =>
			<View key={sorteo.id} style={styles.containerStyle}>
				{/* Encabezado del sorteo */}
				<View style={styles.headerContentStyle}>
					<View style={styles.titileImageContainerStyle}>
						<Image
							source={{ uri: sorteo.imagen_principal }}
							style={styles.titileImageStyle}
						/>
					</View>
					<Text>{ sorteo.titulo }</Text>
				</View>
				{/* /Encabezado del sorteo */}

				{/* Elementos del sorteo */}
				<View>
					<View style={styles.elementStyle}>
						<Image
							source={{ uri: sorteo.imagen_principal }}
							style={styles.imageStyle}
						/>
					</View>
					<View style={styles.elementStyle}>
						<Text>{ sorteo.informacion }</Text>
					</View>
					<View>
						<Button onPress={() => console.log(sorteo.titulo)}>
							Inscribite
						</Button>
					</View>
				</View>
				{/* /Elementos del sorteo */}
			</View>);
	}

	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{ this.renderSorteos() }
			</ScrollView>
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
		marginTop: 10
	},
	elementStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titileImageStyle: {
		height: 50,
		width: 50
	},
	titileImageContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default Sorteos;
