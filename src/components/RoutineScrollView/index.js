import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function RoutineScrollView(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(17,17,17,1)",
    borderRadius: 8
  }
});

export default RoutineScrollView;
