import React from "react";
import { StatusBar, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, images, icons, FONTS } from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const SignUp = ({navigation }) => {

    const Array = [
        {
            Title: 'Doctor',
            image: icons.doctor , 
             ContentArray : [
                { Title: 'Pediatric cardiology team', },
                { Title: 'Ped cardiologist (non invasive)',  },
                { Title: 'Ped cardiologist (interventionist)'},
                { Title: 'Ped cardiac surgeon'},
                { Title: 'Ped echocardiologist' },
                { Title: 'Ped electrophysiologist'},
                { Title: 'Ped cardiac radiologist'},
                { Title: 'Ped cardiac intensivist' },
                { Title: 'Ped cardiac anesthesiologist' },
                { Title: 'Pediatrician',},
                { Title: 'Neonatologist' },
                { Title: 'Other teams' },
                { Title: 'Pediatrician' },
                { Title: 'Neonatologist' },
                { Title: 'Cardiologist' },
                { Title: 'Pulmonologist' },
                { Title: 'Geneticist' },
                { Title: 'Nutritionist' },
                { Title: 'Physiotherapist' },
                { Title: 'Rheumatologist' },
                { Title: 'Psychologist' },
                { Title: 'Hematologist' },
                { Title: 'Nephrologist' },
                { Title: 'Hepatologist' },
                { Title: 'Endocrinologist' },
                { Title: 'Dentist' },
                { Title: 'ENT' }
             ]         
        },
        {
            Title: 'Educator',
            image: icons.educator,
            ContentArray : [
                { Title: 'Educators' },
                { Title: 'Professor' },
                { Title: 'Assistant professor' },
                { Title: 'Lecturer' },
                { Title: 'Assistant lecturer' },
                { Title: 'Teaching assistant' }
             ]   
        },
        {
            Title: 'Researcher',
            image: icons.researcher,
            ContentArray :[
                { "Title": "Researcher" },
                { "Title": "Professor" },
                { "Title": "Assistant professor" },
                { "Title": "Lecturer" },
                { "Title": "Assistant lecturer" },
                { "Title": "Research assistant" }
            ]
        },
        {
            Title: 'Nurse',
            image: icons.nurse,
            ContentArray:[
                { "Title": "Nurse" },
                { "Title": "Chief nurse" },
                { "Title": "Nurse supervisor" },
                { "Title": "Staff nurse" },
                { "Title": "Charge nurse" },
                { "Title": "Nurse practitioner" },
                { "Title": "Nurse resident" },
                { "Title": "Clinical nurse in training" }
            ]
            
        },
        {
            Title: 'Technician',
            image: icons.tecnican,
            ContentArray:[
                { "Title": "Technician" },
                { "Title": "Cardiac sonographer" },
                { "Title": "ECG technician" },
                { "Title": "Holter monitoring technician" },
                { "Title": "Stress test technician" },
                { "Title": "Pacemaker technician" },
                { "Title": "Cardiac catheter technician" },
                { "Title": "CT technician" },
                { "Title": "MRI technician" },
                { "Title": "ECMO technician" }
            ]
            
        },
        {
            Title: 'Therapist',
            image: icons.therapist,
            ContentArray:[
                { "Title": "Therapist" },
                { "Title": "Respiratory Therapist" },
                { "Title": "Physical Therapist" },
                { "Title": "Occupational Therapist" },
                { "Title": "Phlebotomists" },
                { "Title": "Dietitian" },
             
            ]

        },
        {
            Title: 'Pharmacists',
            image: icons.pharmaist,
            ContentArray:[
                { "Title": "Pharmacist" },
                { "Title": "Chief / director of pharmacy" },
                { "Title": "Clinical pharmacy manager" },
                { "Title": "Ped cardiology clinical pharmacist" },
                { "Title": "Pharmacy resident" },
                { "Title": "Pharmacy technician" },
             
            ]
        },
        {
            Title: 'Managerial',
            image: icons.manageable,
            ContentArray:[
                { "Title": "Managerial" },
                { "Title": "Chief executive officer (CEO)" },
                { "Title": "Chief medical officer (CMO)" },
                { "Title": "Chief operating officer (COO)" },
                { "Title": "Chief financial officer (CFO)" },
                { "Title": "Director of pediatric cardiolgy" },
                { "Title": "Medical director of Ped cardiology" },
                { "Title": "Head of Ped cardiac surgery" },
                { "Title": "Chief nursing officer (CNO)" },
                { "Title": "Director of pharmacy" },
                { "Title": "Clinical departments heads" },
                { "Title": "Administrative director" },
                { "Title": "Patient car services manager" },
                { "Title": "Clinical research director" },
                { "Title": "Ped C residents coordinator" },
                { "Title": "Quality assurance manager" },
                { "Title": "Outpatient clinic manager" },
                { "Title": "Human resources director" },
                { "Title": "Public relation director" },
                { "Title": "Markting director" },
                { "Title": "Information technology director" },
                { "Title": "Finance director" },
             
            ]
        },
        {
            Title: 'Employee',
            image: icons.nurse,
            ContentArray:[
                { "Title": "Employee" },
                { "Title": "Receptionist" },
                { "Title": "Patient care coordinator" },
                { "Title": "Human resources staff" },
                { "Title": "Accountant" },
                { "Title": "Informaion technology staff" },
                { "Title": "Legal counseling" },
                { "Title": "Medical reporting staff" },
                { "Title": "Call center staff" },
                { "Title": "Public relation staff" },
             ]
        },
        {
            Title: 'Workers',
            image: icons.workers,
            ContentArray:[
                { "Title": "Worker" },
                { "Title": "Food staff" },
                { "Title": "Security staff" },
                { "Title": "Transportaion staff" },
                { "Title": "Housekeeping staff" },
                { "Title": "Others" },
               
             ]
        },
        {
            Title: 'Volunteers',
            image: icons.volinters,
            ContentArray:[]
        },
        {
            Title: 'Others',
            image: icons.others,
            ContentArray:[]
        },
    ]
    

    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.black,
                padding:RFValue(20),
                paddingHorizontal:RFValue(10)
            }}>
                <StatusBar backgroundColor={COLORS.black} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        marginTop:RFValue(20)
                    }}>
                <View style={{
          backgroundColor:COLORS.white,
          width:RFValue(80),
          height:RFValue(60),
          marginTop: RFValue(50), 
            alignSelf: 'center',
            alignItems:'center'
        }}>
            <Image source={images.main_logo} style={{
           width: RFValue(100),
          height: RFValue(100),
           marginTop: RFValue(-20), 
           alignSelf:'center'
         
            }} resizeMode='contain'></Image>
        </View>
                    <Text style={{ ...FONTS.h6, color: COLORS.white, marginTop: RFValue(30), width: RFValue(120), fontFamily: FONTS.fontFamilyMedium, textAlign: 'center', alignSelf: 'center' }}>
                        Pediatric Cardiology Community
                    </Text>
</View>
                    <Text style={{
                        color: COLORS.white,
                        fontSize:RFValue(15),
                        fontFamily:FONTS.fontFamilyMedium,
                        textAlign: 'center',
                        marginTop:RFValue(40)
                    }}>Create an account as</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(300),
                        marginTop: RFValue(10),
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        marginLeft:10
                       
                        
                    }}>
                        {Array.map((item, index) => (
                           <TouchableOpacity
                           key={index}
                           style={{
                         width:RFValue(90),
                         height:RFValue(90),
                         borderRadius:RFValue(10),
                         padding:RFValue(6),
                         backgroundColor:COLORS.darkGray,
                         alignItems:'center',
                         marginRight:RFValue(5)
                         ,
                         paddingVertical:RFValue(10),
                         justifyContent:'space-between',
                         marginBottom:RFValue(10)
                 
                      
                 
                     }}  onPress={()=>{
                                    navigation.navigate('SignUpDetails',{
                                        Item : item
                                    })
                                }} >
                               <Image source={item.image} style={{
            width: RFValue(30),
            height:RFValue(30),
            marginTop:RFValue(10)
        }} resizeMode='contain'></Image>
        <Text style={{
           color:COLORS.white,
           fontFamily:FONTS.fontFamilyBold,
          // ...FONTS.h5,
          fontSize:RFValue(10),

        }}>{item.Title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

export default SignUp;
