import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import 'react-native-url-polyfill/auto';

import {supabase} from '../supabase/supabase'

const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginPress = async () => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if(error){
            alert("Incorrect email or password.  Please enter them again.")
        } else {
            navigation.navigate("HomeTabs");
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
                    <Text style={styles.loginSubheader}>Please sign in with your Apple id</Text>
                </View>
                <View style={styles.loginButtonView}>
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