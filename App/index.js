// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const letters = ["A", "B", "C", "D", "E"];

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {letters.map((letter, index) => (
                <Text key={index} style={styles.letter}>
                    {letter}
                </Text>
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
});