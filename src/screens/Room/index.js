import React, { Component } from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import ControlScrollView from "../../components/ControlScrollView";
import BackButton from "../../components/BackButton";
import { verticalScale, horizontalScale, moderateScale } from "../../utils/metrics";

function Room(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <ControlScrollView style={styles.controlScrollView} id={props.room} />
      <BackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderColor: "#000000"
  },
  controlScrollView: {
    flex: 1,
    marginBottom: verticalScale(60),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(23)
  }
});

export default Room;
