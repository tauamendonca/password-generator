import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Style';


export default function Home() {
    return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    );
}

