import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { verticalScale, horizontalScale, moderateScale } from "../../../utils/metrics";

function ControlPanel(props) {
  const [state, setState] = useState(props.isEnabled);

  const updateConfig = () => { }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rect4Stack}>
          <Text style={styles.switch1}>{props.name}</Text>
        </View>
        <View style={styles.rect5stack} >
          <TouchableOpacity style={styles.button}>
            <EntypoIcon name="pencil" style={styles.icon}></EntypoIcon>
          </TouchableOpacity>
          <View style={styles.rect5}>
            <Switch
              value={state}
              onValueChange={s => setState(s)}
              thumbColor="rgba(255,255,255,1)"
              trackColor={{
                true: "rgba(4,4,4,1)",
                false: "rgba(255,255,255,1)"
              }}
              disabled={false}
              style={styles.switch2}
            ></Switch>
          </View>
          <TouchableOpacity style={styles.button}>
            <EntypoIcon name="cross" style={styles.icon}></EntypoIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    backgroundColor: "rgba(30,30,30,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 8,
    flexDirection: "row",
    flex: 1,
    marginHorizontal: horizontalScale(8),
    marginVertical: verticalScale(8)
  },
  rect4Stack: {
    alignSelf: 'center'
  },
  rect5stack: {
    top: 0,
    right: 0,
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: 'row'
  },
  switch1: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    height: verticalScale(18),
    marginHorizontal: horizontalScale(10)
  },
  button: {
    width: verticalScale(40),
    justifyContent: "center"
  },
  rect5: {
    justifyContent: "center"
  },
  switch2: {
    alignSelf: "center"
  },
  icon: {
    color: "rgba(155,155,155,1)",
    fontSize: moderateScale(25),
    alignSelf: 'center',
  },
  rect5Row: {
    flexDirection: "row",
    marginRight: 1
  }
});

export default ControlPanel;
