import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Home = () => {

    return(
        <KeyboardAwareScrollView>
            <Text>This is the user id: </Text>
        </KeyboardAwareScrollView>
    );
};

export default Home;