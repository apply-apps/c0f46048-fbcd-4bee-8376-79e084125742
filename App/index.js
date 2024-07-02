// Filename: index.js
// Combined code from all files
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const worlds = ["World 1", "World 2", "World 3", "World 4", "World 5"];

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {worlds.map((world, index) => (
                <Text key={index} style={styles.title}>
                    Hello {world}
                </Text>
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
});