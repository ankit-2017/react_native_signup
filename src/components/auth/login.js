import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
	static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
	render() {
		return <View style={style.container}>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate(`SignUp`)}
				>
					<Text>Sign up</Text>
				</TouchableOpacity> 
			<Text> This is login page </Text>
		 </View>
	}
}

const mapStateToProps = (state) => (
	state
	);
const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}

});
export default connect(mapStateToProps)(Login)