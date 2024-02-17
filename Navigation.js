import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "./app/screens/HomeScreen.js";
import ProfileScreen from "./app/screens/ProfileScreen.js";
import HelpScreen from "./app/screens/HelpScreen.js";

//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup(){
    return(
        <Tab.Navigator initialRouteName="Home"
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if(route.name === "Profile"){
                        iconName = "person-circle-outline";
                    }
                    else if(route.name === "Home"){
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
            <Tab.Screen name="Home" component={HomeScreen}/>
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