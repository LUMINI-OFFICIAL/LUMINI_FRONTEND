import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { verticalScale, horizontalScale, moderateScale } from "../../utils/metrics";

function BackButton (props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()}
        >
        <Icon name="chevron-left" style={styles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
    height: verticalScale(50),
    position: "absolute",
    justifyContent: "center"
  },
  button: {
    width: horizontalScale(30),
    height: verticalScale(30),
    justifyContent: "center",
    marginLeft: 22
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: moderateScale(30),
    alignSelf: "center"
  }
});

export default BackButton;