import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Parse from "parse/react-native.js";
import DateTimePicker from '@react-native-community/datetimepicker';
import Meal from "../components/Meal";
import {getDayData, getItemData, getSelectedDayData, getMealData} from '../components/Queries'


const Meals = ({navigation}) => {

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            //getUserData()
        });
        return unsubscribe;
    },[]);

    const handleDateChange = (event, selected) => {
        const currentDate = selected || selectedDate;
        setSelectedDate(currentDate);
    };


    const addMeal = () => {
        navigation.navigate('Add Meal');
    }

    const itemSeperatorView = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
            }}
          />
        );
    };

    return(
        <View style={styles.screen}>
            {!loading ? (
                <View>
                    <View style={styles.header}>
                        <DateTimePicker 
                            style={{alignItems: 'center'}} 
                            minimumDate={new Date(2023, 7, 10)}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </View>
                    <TouchableOpacity
                            style={styles.addButton}
                            onPress={addMeal}
                        >
                            <Text style={styles.addButtonText}>+ Add Meal</Text>
                    </TouchableOpacity>
                    <Text style={styles.progressTitle}>MEALS</Text>
                    <View style={{backgroundColor: 'red'}}>
                        <Text></Text>
                        <FlatList
                            data={meals}
                            ItemSeparatorComponent={itemSeperatorView}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <Text>{item.objectId}</Text>}
                            ListEmptyComponent={()=> <Text style={styles.noEvent}>No meals have been added for today.</Text>}
                        />
                    </View>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default Meals;