import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import Parse from "parse/react-native.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'
import { ProgressBar } from 'react-native-paper';

const Home = () => {
    const [goals, setGoals] = useState(null);
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        const curr = await Parse.User.currentAsync();
        setGoals(curr.get('goals'));
    }  

    const DisplayGoals = () => {
        if(goals!=null){
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
        } else { 
            return (
                <View style={styles.emptyGoals}>
                    <Text style={styles.noEvent}>Start by setting your calorie and macro goals!</Text>
                    <TouchableOpacity
                        style={styles.setGoals}
                        onPress={onModalOpen}
                    >
                        <MaterialCommunityIcons name='pencil' size={18}/>
                        <Text style={{fontSize: 18}}> Set Goals</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    const AddGoals = ({isVisible, onClose}) => {
        let calories = 0;
        let protein= 0;
        let carbs = 0;
        let fats = 0;

        const press = async () =>{
            let tempGoals = [calories, protein, carbs, fats];
            try {
                const user = await Parse.User.currentAsync();
                user.set('goals', tempGoals);
                await user.save();
                setGoals(tempGoals);
                Alert.alert('Success!', 'Goals have been successfully set.', [
                    {text: 'Get started', onPress: () => onClose()},
                  ]);
            } catch (error){
                alert(error);
            }
        }
        return (
            <KeyboardAwareScrollView>
            <Modal visible={isVisible} animationType='slide' presentationStyle='pageSheet'>
                <KeyboardAwareScrollView style={styles.modalOverlay}>
                    <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginBottom: 15}}>
                        Enter your calorie and macro goals:
                    </Text>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Calories:</Text>
                        <NumericInput
                            onChange={value => calories=value}
                            value={calories}
                            totalWidth={140}
                            totalHeight={60}
                            minValue={0}
                            maxValue={7000}
                            rounded
                            step={10}
                            type='up-down'
                            upDownButtonsBackgroundColor={'#eeeeee'}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Protein (g):</Text>
                        <NumericInput
                            onChange={value => protein=value}
                            value={protein}
                            totalWidth={140}
                            totalHeight={60}
                            minValue={0}
                            maxValue={400}
                            rounded
                            type='up-down'
                            upDownButtonsBackgroundColor={'#eeeeee'}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Carbs (g):</Text>
                        <NumericInput
                            onChange={value => carbs=value}
                            value={carbs}
                            totalWidth={140}
                            totalHeight={60}
                            minValue={0}
                            maxValue={600}
                            rounded
                            type='up-down'
                            upDownButtonsBackgroundColor={'#eeeeee'}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Fats (g):</Text>
                        <NumericInput
                            onChange={value => fats=value}
                            value={fats}
                            totalWidth={140}
                            totalHeight={60}
                            minValue={0}
                            maxValue={500}
                            rounded
                            type='up-down'
                            upDownButtonsBackgroundColor={'#eeeeee'}
                        />
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.saveGoals} onPress={press}>
                            <MaterialCommunityIcons name="check" color="white" size={22} />
                            <Text style={{fontSize: 20, color: 'white'}}>Save Goals </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancel} onPress={onModalClose}>
                            <Text style={{fontSize: 20, fontWeight: '700', color: 'red'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </Modal>
            </KeyboardAwareScrollView>
        )
    }

    const onModalOpen = () => {
        setModalVisible(true);
    }

    const onModalClose = () => {
        setModalVisible(false);
    }

    return(
        <KeyboardAwareScrollView style={styles.screen}>
            <DisplayGoals/>
            <AddGoals isVisible={modalVisible} onClose={onModalClose}/>
        </KeyboardAwareScrollView>
    );
};

export default Home;