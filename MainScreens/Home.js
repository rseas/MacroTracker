import React, {useEffect, useState} from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import Parse from "parse/react-native.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'

const Home = () => {
    const [user, setUser] = useState([]);
    const [goals, setGoals] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        const curr = await Parse.User.currentAsync();
        setUser(curr);
        setGoals(curr.get('goals'));
    }  

    const DisplayGoals = () => {
        if(goals!=null){
            return (
                <View>
                    <Text>Calories: {goals[0]}</Text>
                    <Text>Protein: {goals[1]}</Text>
                    <Text>Carbs: {goals[2]}</Text>
                    <Text>Fats: {goals[3]}</Text>
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
        let carb = 0;
        let fats = 0;

        const press = async () =>{
            
        }

        return (
            <Modal visible={isVisible} animationType='slide' presentationStyle='pageSheet'>
                <View style={styles.modalOverlay}>
                    <Text style={{fontSize: 20, fontWeight: '600', textAlign: 'center', marginBottom: 15}}>
                        Enter your calorie and macro goals:
                    </Text>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Calories:   </Text>
                        <NumericInput
                            onChange={value => calories=value}
                            value={calories}
                            totalWidth={140}
                            totalHeight={60}
                            minValue={0}
                            maxValue={6000}
                            rounded
                            type='up-down'
                            upDownButtonsBackgroundColor={'#eeeeee'}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Protein:   </Text>
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
                        <Text style={styles.goalInputText}>Carbs:   </Text>
                        <NumericInput
                            onChange={value => carbs=value}
                            value={calories}
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
                        <Text style={styles.goalInputText}>Fats:   </Text>
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
                    </View>
                </View>
            </Modal>
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