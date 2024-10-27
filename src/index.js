import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const MakeCV = ({ navigation }) => {
  const [options, setOptions] = useState([
    { title: 'personal', show: true },
    { title: 'Certifications', show: false },
    { title: 'Trainings', show: false },
    { title: 'Skills', show: false },
    { title: 'Career', show: false },
    { title: 'Conferences', show: false },
    { title: 'Research', show: false },
    { title: 'References', show: false },
  ]);

  const [selectedOption , setselectedOption] = useState(options[0].title)


  const handleOptionPress = ( item , index ) => {
    setOptions((prevOptions) => 
      prevOptions.map((option, idx) => ({
        ...option,
        show: idx === index,  
      }))
 

    );
    setselectedOption(item.title)

    
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: RFValue(5),
        borderBottomWidth: 1,
        borderColor: COLORS.darkyellow,
        marginBottom: RFValue(10),
      }}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: RFValue(80),
              borderWidth: 1,
              borderColor: item.show ? COLORS.darkyellow : COLORS.darkGray,
              backgroundColor: COLORS.black,
              borderRadius: RFValue(5),
              paddingVertical: RFValue(7),
              alignItems: 'center',
              marginLeft: RFValue(5),
              marginBottom: RFValue(10),
              justifyContent: 'center',
            }}
            onPress={() => handleOptionPress(item , index)}
          >
            <Text style={{
              ...FONTS.h5,
              color: COLORS.white,
              fontFamily: FONTS.fontFamilyMedium,
              marginRight: RFValue(5),
            }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ padding: RFValue(10) }}>

   
      {selectedOption == 'personal'? 
      <>
     
     <View style={{
        width:'100%',
        padding:RFValue(8),
        backgroundColor:COLORS.black,
        borderWidth:1,
        borderColor:COLORS.gray,
        borderRadius:RFValue(5),
        
        


      }}>
        <Text style={{
            ...FONTS.h4,
            color:COLORS.darkyellow,
            fontFamily:FONTS.fontFamilyMedium
        }}>personal data</Text>
      </View>
      </>
    : null}
      </View>
    </View>
  );
};

export default MakeCV;
