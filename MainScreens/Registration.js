import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    const submitAndClear = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPassword2('');
        setUsername('');        
    }

    const register = async () => {
        if (username.trim() === "" || username === undefined || email.trim() === "" || email === undefined  || password.trim() === "" || password === undefined ) {
            alert('Please enter fields correctly.')  
        } else if(password != password2){
            alert('Passwords do not match.')
        } else {
            try {
                Parse.User.logOut();
                let user = new Parse.User();
                user.set("username", username);
                user.set("email", email);
                user.set("password", password);
                user.set("first_name", firstName);
                user.set("last_name", lastName);
                const result = await user.signUp();
                
                AsyncStorage.setItem('sessionToken', result.getSessionToken());
                AsyncStorage.setItem('username', result.getUsername());
                submitAndClear();
                alert('Thanks for signing up! Please check your inbox and confirm your email then log in.')
                navigation.goBack();  

            } catch (error) {
                console.log(error)
                alert(error)
            }
        }
        
    }

    return(
        <KeyboardAwareScrollView style={styles.screen}>
            <View style={{alignItems:'center'}}>
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    autoCapitalize='none'
                    maxLength={25}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    autoCapitalize='none'
                    maxLength={25}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    autoCapitalize='none'
                    maxLength={25}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    autoCapitalize='none'
                    maxLength={25}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize='none'
                    maxLength={25}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder='Confirm Password'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setPassword2(text)}
                    value={password2}
                    autoCapitalize='none'
                    maxLength={25}
                />
                <TouchableOpacity 
                    style={styles.registerButton}
                    onPress={register}
                >
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Registration;