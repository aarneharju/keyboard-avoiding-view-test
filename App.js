import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, Platform, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Text>Howdy, enter something something.</Text>
        <TextInput style={styles.input} value={inputValue} onChangeText={setInputValue} placeholder='Enter text'></TextInput>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
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
  input: {
    borderBottomColor: "pink",
    borderBottomWidth: 4,
    alignSelf: "stretch",
    margin: 16,
    padding: 8,
    backgroundColor: "lightblue"
  }
});
