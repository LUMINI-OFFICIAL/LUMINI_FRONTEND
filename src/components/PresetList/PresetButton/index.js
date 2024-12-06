import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";

import { verticalScale, horizontalScale, moderateScale } from "../../../utils/metrics";

function PresetButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity 
        style={styles.button3} 
        onPress={props.onPress}
      >
        <View style={styles.button2Row}>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.ellipse2Stack}>
              <Svg viewBox="0 0 29.55 30.5" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(77,77,77,1)"
                  cx={15}
                  cy={15}
                  rx={15}
                  ry={15}
                ></Ellipse>
              </Svg>
              <Icon name={!props.isActive ? "controller-play": "controller-paus"} style={styles.icon2}></Icon>
            </View>
          </TouchableOpacity>
          <Text style={styles.preset}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button3: {
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 8,
    height: verticalScale(46),
    flexDirection: "row",
    marginVertical: verticalScale(5),
    marginHorizontal: horizontalScale(5)
  },
  button2: {
    width: horizontalScale(30),
    height: verticalScale(30)
  },
  ellipse2: {
    width: horizontalScale(30),
    height: verticalScale(30),
    position: 'absolute'
  },
  icon2: {
    alignSelf: 'center',
    position: 'absolute',
    color: "rgba(0,0,0,1)",
    fontSize: moderateScale(25)
  },
  ellipse2Stack: {
    width: horizontalScale(30),
    height: verticalScale(30),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  preset: {
    alignSelf: 'center',
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: moderateScale(12),
    marginLeft: 10
  },
  button2Row: {
    height: verticalScale(30),
    flexDirection: "row",
    alignSelf: 'center',
    flex: 1,
    marginRight: 191,
    marginLeft: 13
  }
});

export default PresetButton;
