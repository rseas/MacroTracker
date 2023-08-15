import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { supabase } from '../supabase/supabase';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';

const Registration = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const register = async () => {
        if(password != password2){
            alert("Passwords do not match!")
        } else {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                first_name: firstName,
                last_ame: lastName,
            })
            if(error){
                alert(error)
            } else {
                alert("Congratulations! You have officially signed up for MacroTracker. Please login to your new account.")
                navigation.navigate("Login");
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