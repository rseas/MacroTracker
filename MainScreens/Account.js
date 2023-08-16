import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Parse from "parse/react-native.js";
import { TouchableOpacity, View, Text, Modal, Alert, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';


const Account = ({navigation}) => {
    const [goals, setGoals] = useState([0,0,0,0]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCurrInfo();
        });
        return unsubscribe;
    },[]);

    const getCurrInfo = async () => {
        const curr = await Parse.User.current();
        setGoals(curr.get('goals'));
    } 

    const UpdateGoals = ({isVisible, onClose}) => {
        let temp = [...goals];
        
        const press = async () =>{
            let tempGoals = [temp[0], temp[1], temp[2], temp[3]];
            for(let i = 0; i < 3; i++){
                if(temp[i] == null){

                }
            }
            try {
                const user = await Parse.User.currentAsync();
                user.set('goals', tempGoals);
                await user.save();
                getCurrInfo();
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
                            defaultValue={temp[0].toString()}
                            onChangeText={(n) => temp[0]=parseInt(n)}
                        />
                    </View>
                    <View style={styles.goalInput}>
                        <Text style={styles.goalInputText}>Protein (g):</Text>
                        <TextInput 
                            style={styles.numInput}
                            keyboardType='number-pad'
                            defaultValue={temp[1].toString()}
                            numeric
                            maxLength={3}
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
                            defaultValue={temp[2].toString()}
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
                            defaultValue={temp[3].toString()}
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

    const alertLogout = () => {
        Alert.alert('Logout', 'Are you sure you would like to logout and return to the login screen?', [
            {text: 'Logout', onPress: () => handleLogout()},
            {text: 'Cancel', onPress: () => console.log("Logout Aborted")},
        ]);
    }

    const handleLogout = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await Parse.User.logOut();
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0, // Set the index of the new screen to be displayed
                        routes: [{ name: 'Login' }], // Specify the name of the screen to navigate to
                    })
                );
                resolve();
            } catch (error) {
                console.error('Error logging out:', error);
                reject(error);
            }
        })
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
                    onPress={alertLogout}
                >
                    <Text style={styles.settingsText}>Log out</Text>
                </TouchableOpacity>
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