import React, {useEffect, useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles'
import { View, Text, FlatList } from 'react-native';
import Parse from "parse/react-native.js";
import DateTimePicker from '@react-native-community/datetimepicker';
import Meal from "../components/Meal";
import {getDayData, getItemData, getSelectedDayData, getMealData} from '../components/Queries'


const Meals = ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getUserData()
        });
        return unsubscribe;
    },[]);

    const handleDateChange = (event, selected) => {
        console.log(meals);
        const currentDate = selected || selectedDate;
        setSelectedDate(currentDate);
        for(const day of userData){
            if(day.date.toISOString().slice(0, 10) == currentDate.toISOString().slice(0, 10)){
                setMeals(day.meals);
                console.log(day.meals[0])
                return;
            }
        }
        setMeals([]);
    };

    const getUserData = async () => {
        const currentUser = Parse.User.current();

        const DayClass = Parse.Object.extend('Day');
        const MealClass = Parse.Object.extend('Meal');
        const ItemClass = Parse.Object.extend('Item');
        const UserData= []
    
        const daysQuery = new Parse.Query(DayClass);
        daysQuery.equalTo('user', currentUser);
        try {
            const userDays = await daysQuery.find();

            for(const day of userDays){
                const mealsRelation = day.relation('meals');
                const mealsQuery = mealsRelation.query();
        
                try {
                    const dayMeals = await mealsQuery.find();

                    for (const meal of dayMeals) {
                        // Get the relation to "items" from the meal
                        const itemsRelation = meal.relation('items');
                        const itemsQuery = itemsRelation.query();
        
                        try {
                            const mealItems = await itemsQuery.find();
                            let dayData = {
                                'date':day.get('date'),
                                'id': day.get('id'),
                                'userId': day.get('user'),
                                'day': day,
                                'meals': dayMeals,
                                'items' : mealItems,
                            }
                            UserData.push(dayData);
                        } catch (error) {
                            console.error(`Error fetching items for Meal ${meal.id}:`, error);
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching meals for Day ${day.id}:`, error);
                }
            }
        } catch(e){
            alert(e);
        }
        setUserData(UserData);
        setLoading(false);
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
                            style={{}} 
                            minimumDate={new Date(2023, 7, 10)}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </View>
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