import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm, RadioButton } from 'redux-form';
import {renderInput} from '../text_input';
import {Container, Header, Content, Button, Item, Form, Input, Label, Icon, Radio} from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';

const validate = (values) =>{
	let error = {}
	if(!values.username){
		error.username = 'username required'
	}
	if(!values.firstname){
		error.firstname = 'First name cannot be empty'
	}if(!values.lastname){
		error.lastname = 'last name cannot be empty'
	}if(!values.email){
		error.email = 'Email cannot be empty'
	}if(!values.password){
		error.password = 'Password cannot be empty'
	}if(!values.confirmpassword){
		error.confirmpassword = 'Confirm password is required'
	}
	console.log('error', error);
	return error;
}

class SignUp extends Component {
	static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
	
	constructor(props) {
		super(props);
		this.registration = this.registration.bind(this);
	}

	registration(values){
		console.log('values', values);
	}

	render(){
		const {handleSubmit} = this.props;

		return <Container>
					<Content>
						<Form> 
								<Field
	        					name='username'
	        					label='user'
	        					type='text'
								component={renderInput}
								icon="person"
								/>
								{/*<Icon color="#0000ff" size={25} />*/}


								<Field
	        					name='firstname'
	        					label='firstname'
	        					type='text'
								component={renderInput}
								icon="person"
								/>

								<Field
	        					name='lastname'
	        					label='lastname'
								type='text'
								icon="person"
	        					component={renderInput}
								/>

								<Field
	        					name='email'
	        					label='email'
								type='email'
								icon="envelope"
	        					component={renderInput}
								/>

								<Field
	        					name='password'
	        					label='password'
								type='password'
								icon="lock"
	        					component={renderInput}
								/>

								<Field
	        					name='confirmpassword'
	        					label='confirm password'
								type='password'
								icon="lock"
	        					component={renderInput}
								/>


							<Button style={style.ButtonStyle} 
							block
							rounded 
							primary 
							onPress={handleSubmit(this.registration)}>
									<Text>Submit</Text>
							</Button>
						</Form>
					</Content>
				</Container>
	}
}

const style = StyleSheet.create({
	ButtonStyle: {
		marginTop: 10,
	}

});

export default reduxForm({ 
	form: 'signupform',
	validate
	})(SignUp)