import React from 'react';
import { Button, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Is this working lol</Text>
            <Button
                title="Go to Profile"
                onPress={() => props.navigation.navigate('Profile')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    }
});

export default HomeScreen;