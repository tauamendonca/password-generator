import React from "react";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { layout, typography } from "../../styles/styles";
import { GeneratorMainSection } from "../../components/button/Button";
import { Logo } from "../../components/logo/Logo";

export default function Home() {
  return(
    <View style={layout.container}>
      <Logo/>

      <View style={layout.buttonColumn}>
        <GeneratorMainSection/>
      </View>

      <StatusBar style="light" />
    </View>
  )
}