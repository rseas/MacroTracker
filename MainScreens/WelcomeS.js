import React, {useEffect, useState} from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import Parse from "parse/react-native.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Welcome = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            
        });
        return unsubscribe;
    },[]);

    let calories = 0;
    let protein= 0;
    let carbs = 0;
    let fats = 0;

    const press = async () =>{
        let tempGoals = [calories, protein, carbs, fats];
        try {
            const user = await Parse.User.currentAsync();
            user.set('goals', tempGoals);
            user.set('goalsSet', true);
            await user.save();
            Alert.alert('Success!', 'Goals have been successfully set.', [
                {text: 'Get started', onPress: () => navigation.navigate("HomeTabs")},
              ]);
        } catch (error){
            alert(error);
        }
    }
    return (
        <KeyboardAwareScrollView style={styles.screen}>
            <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginBottom: 15}}>
                Welcome to MacroTracker! Let's start by entering your calorie and macro goals:
            </Text>
            <View style={styles.goalInput}>
                <Text style={styles.goalInputText}>Calories:</Text>
                <TextInput 
                    style={styles.numInput}
                    keyboardType='number-pad'
                    numeric
                    maxLength={4}
                    onChangeText={(n) => calories = parseInt(n)}
                />
            </View>
            <View style={styles.goalInput}>
                <Text style={styles.goalInputText}>Protein (g):</Text>
                <TextInput 
                    style={styles.numInput}
                    keyboardType='number-pad'
                    numeric
                    maxLength={3}
                    onChangeText={(n) => protein = parseInt(n)}
                />
            </View>
            <View style={styles.goalInput}>
                <Text style={styles.goalInputText}>Carbs (g):</Text>
                <TextInput 
                    style={styles.numInput}
                    keyboardType='number-pad'
                    numeric
                    maxLength={3}
                    onChangeText={(n) => carbs = parseInt(n)}
                    
                />
            </View>
            <View style={styles.goalInput}>
                <Text style={styles.goalInputText}>Fats (g):</Text>
                <TextInput 
                    style={styles.numInput}
                    keyboardType='number-pad'
                    numeric
                    maxLength={3}
                    onChangeText={(n) => fats = parseInt(n)}
                />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.saveGoals} onPress={press}>
                    <MaterialCommunityIcons name="check" color="white" size={22} />
                    <Text style={{fontSize: 20, color: 'white'}}>Save Goals </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Welcome;