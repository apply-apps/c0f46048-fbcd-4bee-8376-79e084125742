// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const letters = ["A", "B", "C", "D", "E"];
const displayDuration = 1000; // Display each letter for 1 second

export default function App() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLetterIndex((prevIndex) =>
                prevIndex < letters.length - 1 ? prevIndex + 1 : 0
            );
        }, displayDuration);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{letters[currentLetterIndex]}</Text>
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
        fontSize: 100,
        fontWeight: 'bold',
        color: '#333',
    },
});