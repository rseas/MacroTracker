import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Account, Meals, Login, Registration } from './MainScreens';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs =  () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={Meals}/>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Registration" component={Registration} 
          options={{ 
            headerShown: true,
            headerBackTitleVisible: true
          }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
