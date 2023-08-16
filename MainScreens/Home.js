import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import Parse from "parse/react-native.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const Home = ({navigation}) => {
    const [goals, setGoals] = useState(null);
    const [loading, setLoading] = useState(true);
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
          });
        return unsubscribe;
    },[]);

    const getData = async () => {
        try{
            const curr = await Parse.User.currentAsync();
            setGoals(curr.get('goals'));
            setLoading(false);
        } catch(e){
            alert(e)
        }
    }  

    const DisplayGoals = () => {
        return (
            <View>
                <Text style={{fontSize: 23, marginBottom: 18}}>TODAY'S PROGRESS</Text>
                <View style={styles.progContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.progressTitle}>Calories:</Text>
                        <Text style={styles.progressTitle}>{calories} / {goals[0]}</Text>
                    </View>
                    <ProgressBar progress={calories/goals[0]} color={'green'} style={styles.progressBar}/>
                </View>
                <View style={styles.progContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.progressTitle}>Protein:</Text>
                        <Text style={styles.progressTitle}>{protein} / {goals[1]}</Text>
                    </View>
                    <ProgressBar progress={protein/goals[1]} color={'green'} style={styles.progressBar}/>
                </View>
                <View style={styles.progContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.progressTitle}>Carbs:</Text>
                        <Text style={styles.progressTitle}>{carbs} / {goals[2]}</Text>
                    </View>
                    <ProgressBar progress={carbs/goals[2]} color={'green'} style={styles.progressBar}/>
                </View>
                <View style={styles.progContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.progressTitle}>Fats:</Text>
                        <Text style={styles.progressTitle}>{fats} / {goals[3]}</Text>
                    </View>
                    <ProgressBar progress={fats/goals[3]} color={'green'} style={styles.progressBar}/>
                </View>
            </View>
        )
    }
    
    return(
        <KeyboardAwareScrollView style={styles.screen}>
            {!loading ? (
                <DisplayGoals/>
            ) : (
                <Text>Loading...</Text>
            )}
        </KeyboardAwareScrollView>
    );
};

export default Home;