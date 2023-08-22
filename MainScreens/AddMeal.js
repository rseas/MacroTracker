import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Parse from "parse/react-native.js";
import { TouchableOpacity, View, Text, Modal, Alert, TextInput } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import SwitchSelector from "react-native-switch-selector";

const AddMeal = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const AddNewItem = ({isVisible, onClose}) => {
        
        const [name, setName] = useState('');
        const [calories, setCalories] = useState(0);
        const [protein, setProtein] = useState(0);
        const [carbs, setCarbs] = useState(0);
        const [fats, setFats] = useState(0);
        const [servingSize, setServingSize] = useState(0);
        const [servingSizeType, setServingSizeType] = useState('g');

        const press = async () =>{
            const user = Parse.User.current();
            const ItemClass = Parse.Object.extend('Item');
            const newItem = new ItemClass();

            if(name == ''){
                alert('Must enter a name for the item.');
                return;
            }

            newItem.set('name', name)
            newItem.set('calories', calories);
            newItem.set('protein', protein);
            newItem.set('carbs', carbs);
            newItem.set('fats', fats);
            newItem.set('serving_size_type', servingSizeType);
            newItem.set('serving_size', servingSize);
            newItem.set('user', user)

            const acl = new Parse.ACL();
            acl.setReadAccess(user, true);
            acl.setWriteAccess(user, true);
            
            newItem.setACL(acl);
            try{
                await newItem.save();
                navigation.goBack();
            } catch (e) {
                alert(e);
            } 
        }

        const exitModal = () => {
            onModalClose();

        }

        return (
            <KeyboardAwareScrollView>
                <Modal visible={isVisible} animationType='slide' presentationStyle='pageSheet'>
                    <View style={styles.varList}>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Item name:</Text>
                            <TextInput 
                                style={styles.nameInput}
                                defaultValue={name}
                                onChangeText={(n) => setName(n)}
                            />
                        </View>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Serving Size Unit:</Text>
                            <SwitchSelector
                                options={[
                                    {label: 'g', value: 'g'},
                                    {label: 'oz', value: 'oz'},
                                    {label: 'unit', value: 'unit'}
                                ]}
                                hasPadding
                                style={{width: '40%'}}
                                onPress={value => setServingSizeType(value)}
                                initial={0}
                                buttonColor={'#63e5ff'}
                                selectedColor={'black'}
                            />
                        </View>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Serving Size: </Text>
                            <NumericInput
                                onChange={value => setServingSize(value)}
                                value={servingSize}
                                totalWidth={165}
                                totalHeight={50}
                                minValue={0}
                                rounded
                                maxValue={1000}
                            />
                        </View>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Calories: </Text>
                            <NumericInput
                                onChange={value => setCalories(value)}
                                value={calories}
                                totalWidth={165}
                                totalHeight={50}
                                minValue={0}
                                rounded
                                maxValue={5000}
                            />
                        </View>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Protein:</Text>
                            <NumericInput
                                onChange={value => setProtein(value)}
                                value={protein}
                                totalWidth={165}
                                totalHeight={50}
                                minValue={0}
                                rounded
                                maxValue={600}
                            />
                        </View>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Carbs:</Text>
                            <NumericInput
                                onChange={value => setCarbs(value)}
                                value={carbs}
                                totalWidth={165}
                                totalHeight={50}
                                minValue={0}
                                rounded
                                maxValue={600}
                            />
                        </View>
                        <View style={styles.var}>
                            <Text style={styles.varTitle}>Fats:</Text>
                            <NumericInput
                                onChange={value => setFats(value)}
                                value={fats}
                                totalWidth={165}
                                totalHeight={50}
                                minValue={0}
                                rounded
                                maxValue={300}
                            />
                        </View>

                    </View>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <TouchableOpacity style={styles.confirmAddItem} onPress={press}>
                            <MaterialCommunityIcons name="plus" color="#2a2a2a" size={22} />
                            <Text style={{fontSize: 18, color: '#2a2a2a'}}>Add Item</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 15}} onPress={exitModal}>
                            <Text style={{fontSize: 20, fontWeight: '500', color: 'red'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
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

    return (
        <KeyboardAwareScrollView style={styles.screen}>
            <View style={styles.settingsContainer}>
                <TouchableOpacity
                    style={styles.addItemButton}
                    onPress={onModalOpen}
                >
                    <Text style={styles.addItemText}>Add New Item</Text>
                </TouchableOpacity>
                <AddNewItem isVisible={modalVisible} onClose={onModalClose}/>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default AddMeal;