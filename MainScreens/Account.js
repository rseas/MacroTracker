import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Parse from "parse/react-native.js";
import { TouchableOpacity, View, Text, Modal, Alert, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Account = () => {
    const [user, setUser] = useState();
    const [goals, setGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [check, setCheck] = useState(false)

    useEffect(() => {
        getCurrInfo();
    },[]);

    const getCurrInfo = async () => {
        if(!check){
            const curr = await Parse.User.current();
            setUser(curr);
            setGoals(curr.get('goals'));
            console.log(curr.get('goals'));
        } else {
            const updatedCurr = await user.fetch();
            setGoals(updatedCurr.get('goals'));
            console.log(updatedCurr.get('goals'));
        }
    } 

    const UpdateGoals = ({isVisible, onClose}) => {
        getCurrInfo();
        let temp = [];
        
        const press = async () =>{
            let tempGoals = [temp[0], temp[1], temp[2], temp[3]];
            try {
                const user = await Parse.User.currentAsync();
                user.set('goals', tempGoals);
                await user.save();
                Alert.alert('Success!', 'Goals have been successfully set.', [
                    {text: 'Return', onPress: () => onClose()},
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
                        <TextInput 
                            style={styles.numInput}
                            keyboardType='number-pad'
                            numeric
                            maxLength={4}
                            defaultValue={goals[0].toString()}
                            onChangeText={(n) => temp[0]=parseInt(n)}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Protein (g):</Text>
                        <TextInput 
                            style={styles.numInput}
                            keyboardType='number-pad'
                            numeric
                            maxLength={3}
                            defaultValue={goals[1].toString()}
                            onChangeText={(n) => temp[1]=parseInt(n)}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Carbs (g):</Text>
                        <TextInput 
                            style={styles.numInput}
                            keyboardType='number-pad'
                            numeric
                            maxLength={3}
                            defaultValue={goals[2].toString()}
                            onChangeText={(n) => temp[2]=parseInt(n)}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Fats (g):</Text>
                        <TextInput 
                            style={styles.numInput}
                            keyboardType='number-pad'
                            numeric
                            maxLength={3}

                            defaultValue={goals[0].toString()}
                            onChangeText={(n) => temp[3]=parseInt(n)}
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
            <View style={styles.settingsContainer}>
                <TouchableOpacity
                    style={styles.settingsOption}
                    onPress={onModalOpen}
                >
                    <Text style={styles.settingsText}>Update your goals</Text>
                </TouchableOpacity>
                <UpdateGoals isVisible={modalVisible} onClose={onModalClose}/>
                <TouchableOpacity
                    style={styles.settingsOption}
                >
                    <Text style={styles.settingsText}>Future Seting</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Account;