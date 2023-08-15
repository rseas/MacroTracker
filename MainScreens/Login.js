import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import 'react-native-url-polyfill/auto';

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('brL7WBPHzNyhKnWg5fp78GOsdLcWs1yODCSW150N','Y6Hw4zmF0bJZTFpDu5buneq1NFuH0BfUIBHOZqVq');
Parse.serverURL = 'https://parseapi.back4app.com';

const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginPress = async () => {
        if (username === "" || password === "" ) {
            alert('Please fill in login fields correctly.')
        } else {
            try {
                await Parse.User.logIn(username, password);
                // this.submitAndClear();
                navigation.navigate("HomeTabs");       
            } catch (error) {    
                alert(error);
            }
        }
    }


    const signUp = () => {
        navigation.navigate("Registration");
    }

    return(
        <KeyboardAwareScrollView style={styles.screen}>
            <View style={styles.loginContainer}>
                <View style={styles.loginHeaderContainer}>
                    <Text style={styles.loginWelcome}>Welcome to MacroCalculator!</Text>
                    <Text style={styles.loginSubheader}></Text>
                </View>
                <View style={styles.loginButtonView}>
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
                        maxLength={30}
                    />
                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={loginPress}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.signUpButton}
                        onPress={signUp}
                    >
                        <Text style={styles.signUpText}>Sign up?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Login;