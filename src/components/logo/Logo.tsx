import React from 'react';
import { Text, Image } from 'react-native';
import { layout, typography } from '../../styles/styles';


export function Logo() {

  return (
    <>
        <Image
        source={require("../../../assets/bat-logo.png")} 
        style={[layout.logo, { width: 165, height: 135 }]}
        />

        {/* Main Title */}
        <Text style={typography.appTitle}>Bat Password Generator</Text>


        {/* Section Title */}
        <Text style={typography.sectionTitle}>Click generate</Text>
    </>
  );
}