import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./app/screens/HomeScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import HelpScreen from "./app/screens/HelpScreen.js";
import StartTreatmentScreen from './app/screens/StartTreatmentScreen.js';
import CalendarScreen from './app/screens/CalendarScreen.js';
import JournalScreen from './app/screens/JournalScreen.js';
import HistoryScreen from './app/screens/HistoryScreen.js';
import LoginScreen from './app/screens/LoginScreen.js';

//Tab Bottom
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackGroup(){
    return(
        <HomeStack.Navigator
            screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="StartTreatment" component={StartTreatmentScreen}/>
            <HomeStack.Screen name="Calendar" component={CalendarScreen}/>
            <HomeStack.Screen name="Journal" component={JournalScreen}/>
            <HomeStack.Screen name="History" component={HistoryScreen}/>
        </HomeStack.Navigator>
    )
}


function TabGroup(){
    return(
        <Tab.Navigator initialRouteName='HomeStackGroup'
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if(route.name === "Profile"){
                        iconName = "person-circle-outline";
                    }
                    else if(route.name === "HomeStackGroup"){
                        iconName = 'home';
                    }
                    else if(route.name === "Help"){
                        iconName = 'help-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: "#5A7CF6",
                tabBarInactiveTintColor: "#9F9FA0",
                headerShown: false,
            })}
        >
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="HomeStackGroup" component={HomeStackGroup} options={{tabBarLabel:"Home"}}/>
            <Tab.Screen name="Help" component={HelpScreen} />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}