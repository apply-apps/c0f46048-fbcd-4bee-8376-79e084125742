// Filename: index.js
// Combined code from all files
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const letters = [
    { letter: "A", word: "Apple" },
    { letter: "B", word: "Ball" },
    { letter: "C", word: "Cat" },
    { letter: "D", word: "Dog" },
    { letter: "E", word: "Elephant" },
];

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showWord, setShowWord] = useState(false);

    const handleNextLetter = () => {
        setShowWord(false);
        setCurrentIndex((prevIndex) =>
            prevIndex < letters.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handleShowWord = () => {
        setShowWord(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.letter}>{letters[currentIndex].letter}</Text>
            {showWord && <Text style={styles.word}>{letters[currentIndex].word}</Text>}
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={handleNextLetter}>
                    <Text style={styles.buttonText}>Next Letter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleShowWord}>
                    <Text style={styles.buttonText}>Show Word</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 20,
    },
    word: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});