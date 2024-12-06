import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { verticalScale, horizontalScale, moderateScale } from "../../../utils/metrics";


function RoomButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.button}
      >
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.switchesCount}>{props.switchesCount} switches</Text>
        <Text style={styles.outletsCount}>{props.outletsCount} outlets</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(17,17,17,1)"
  },
  button: {
    height: verticalScale(110),
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000",
    marginTop: verticalScale(5),
    marginHorizontal: horizontalScale(5),
    justifyContent: 'center'
  },
  title: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    fontSize: moderateScale(12),
    textAlign: "left",
    marginLeft: horizontalScale(20)
  },
  switchesCount: {
    fontFamily: "roboto-regular",
    color: "rgba(204,204,204,1)",
    fontSize: moderateScale(12),
    textAlign: "left",
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(20)
  },
  outletsCount: {
    fontFamily: "roboto-regular",
    color: "rgba(204,204,204,1)",
    fontSize: moderateScale(12),
    textAlign: "left",
    marginTop: verticalScale(2),
    marginLeft: horizontalScale(20)
  }
});

export default RoomButton;
