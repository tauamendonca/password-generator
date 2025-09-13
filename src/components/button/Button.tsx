import React, {useState} from 'react';
import {Text, Pressable, View, TouchableOpacity } from 'react-native';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { layout, typography } from '../../styles/styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';



export function GeneratorMainSection() {
    const [password, setPassword] = useState("********");
    const [feedback, setFeedback] = useState("");
  
    const handleGenerate = () => {
      const newPassword = generatePass();
      setPassword(newPassword);
      setFeedback("");
    };
  
    const handleCopy = () => {
      Clipboard.setStringAsync(password);
      setFeedback("Copied!");
    };
  
    const handleSettings = () => {
      // Navigate to Settings screen here
      setFeedback("Settings opened.");
    };
  

  return (
    <>
      {/* Password Output */}
      <View style={layout.passwordBox}>
        <Text style={typography.passwordText}>{password}</Text>
      </View>
  
  
      {/* Buttons */}
      <View style={layout.buttonColumn}>
      
        {/* Generate Button */}
        <TouchableOpacity style={layout.buttonPrimary} onPress={handleGenerate}>
          <Text style={typography.buttonTextPrimary}>Generate</Text>
        </TouchableOpacity>
      
        {/* Copy Button */}
          <TouchableOpacity style={layout.buttonSecondary} onPress={handleCopy}>
            <FontAwesome6 name="copy" iconStyle="solid" />;
            <Text style={typography.buttonTextSecondary}> Copy</Text>
          </TouchableOpacity>
  
        {/* Settings Button */}
          <TouchableOpacity style={layout.buttonSecondary} onPress={handleSettings}>
            <FontAwesome6 name="gear" iconStyle="solid" />;
            <Text style={typography.buttonTextSecondary}> Settings</Text>
          </TouchableOpacity>
        
        </View>
  

        {/* Feedback Text */}
        {feedback ? (
          <Text
            style={[
              layout.feedback,
              feedback === "Copied!"
                ? typography.feedbackSuccess
                : typography.feedbackError,
            ]}
          >
            {feedback}
          </Text>
        ) : null}
    </>
  );
}