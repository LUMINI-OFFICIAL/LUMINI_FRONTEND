import React, { Component, useState } from "react";
import { StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import axios from "axios";
import { ROUTINE_URL } from "../../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { verticalScale, horizontalScale, moderateScale } from "../../../utils/metrics";


const addRoutine = async (preset) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(ROUTINE_URL, {
      name: preset,
      state: false,
      actions: [],
      schedule: {
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
        days: ['monday', 'tuesday', 'wednesday', 
        'thursday', 'friday', 'saturday', 'sunday']
      }
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    ToastAndroid.show("Successfully added Preset " + preset, ToastAndroid.SHORT);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

function AddPresetButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => addRoutine("Preset")}>
      <View style={styles.rect}>
        <Icon name="plus" style={styles.icon}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(32,32,32,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000"
  },
  rect: {
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 8,
    justifyContent: "center",
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: moderateScale(25),
    alignSelf: "center",
  }
});

export default AddPresetButton;
