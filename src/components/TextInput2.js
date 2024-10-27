import React from "react";
import { StyleSheet, View, TextInput as RNTextInput, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize"; // Import RFValue if you are using it
import { COLORS, FONTS } from  "../constants"; // Ensure you import COLORS and FONTS from your styles file

const TextInput2 = ({ title, onChangeText, placeholder, ...props }) => {
  return (
    <View style={{ marginTop: RFValue(30) }}>
     
      <RNTextInput
        style={styles.textInput}
        placeholder={placeholder || {title}} // Default placeholder
        placeholderTextColor={COLORS.white}
        onChangeText={onChangeText}
        {...props} // Spread other props
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: RFValue(10),
    paddingVertical: RFValue(2),
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    color: COLORS.white,
    ...FONTS.h4,
    fontFamily: FONTS.fontFamilyMedium,
    borderRadius: RFValue(2),
    marginBottom: RFValue(10),
  },
  title: {
    color: COLORS.white, // Change color as needed
    marginBottom: RFValue(5), // Space between title and input
    ...FONTS.h4, // You can adjust font size/style here
  },
});

export default TextInput2;
