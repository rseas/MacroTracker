import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'

const Meals = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            
        });
        return unsubscribe;
    },[]);

    return(
        <KeyboardAwareScrollView style={styles.screen}>

        </KeyboardAwareScrollView>
    );
};

export default Meals;