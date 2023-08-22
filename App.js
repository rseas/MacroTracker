import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Account, Meals, Login, Registration, Welcome, AddMeal } from './MainScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs =  () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: true, tabBarShowLabel: false, tabBarActiveBackgroundColor: 'green'}}>
      <Tab.Screen name="Meals" component={Meals} 
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="black"/>
          ),
            
        }}
      />
      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
            
        }}
      />
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
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Add Meal" component={AddMeal} options={{ headerShown: true, headerBackTitle: 'Back' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
