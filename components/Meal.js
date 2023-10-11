import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import Parse from "parse/react-native.js";

const Meal = ({item}) => {
    

    return (
        <View>
            <Text>{item.get('name')}</Text>
        </View>
    )
}

export default Meal;