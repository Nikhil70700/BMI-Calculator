import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';



const App = () => {
    const [text, setText] = useState('');
    const [submittedText, setSubmittedText] = useState('');
    const handleSubmit = () => {
        setSubmittedText(text);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aur Bhai Swagat hai Apka</Text>
            <TextInput
                placeholder="Enter a text here.."
                style={styles.input}
                value={text}
                onChangeText={setText}
                multiline
                numberOfLines={1} />
            <Button title='Submit' onPress={handleSubmit}></Button>
            {submittedText ? (<Text>Result:{submittedText}</Text>) : null}
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#fff"

    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#333"
    },

    input: {
        width: "100%",
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
    }

});
