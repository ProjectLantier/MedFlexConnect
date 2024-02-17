import React from 'react';
import { Button, Text, StyleSheet, SafeAreaView, View } from 'react-native';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeScreen working</Text>
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