import React, { useState } from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS , FONTS , images , icons } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';


const DropDown = ({ modalType, data, handleSelect, modalVisible, setModalVisible }) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {modalType === "Job_title" && "Job title"}
            {modalType === "County" && "County"}
            {modalType === "institution" && "institution"}
            {modalType === "Doctor" && "Doctor"}
         
          </Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
      },
      modalContainer: {
        width: "80%",
        backgroundColor: COLORS.black,
        borderRadius: RFValue(10),
        padding: RFValue(20),
      },
      modalTitle: {
        ...FONTS.h4,
        fontFamily: FONTS.fontFamilyMedium,
        marginBottom: RFValue(20),
        textAlign: "center",
        color: COLORS.white,
      },
      modalItem: {
        padding: RFValue(10),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
      },
      modalItemText: {
        color: COLORS.white,
        ...FONTS.h4,
      },
      modalCloseButton: {
        marginTop: RFValue(20),
        alignSelf: "center",
      },
      modalCloseText: {
        color: COLORS.Secondary,
        ...FONTS.h4,
      },
})
export default DropDown;
