import React, { Component } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function ControlPanelMod(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <View style={styles.switch2Row}>
          <Text style={styles.switch2}>Switch 1</Text>
          <View style={styles.switch2Filler}></View>
          <View style={styles.switch1Row}>
            <Switch
              value={true}
              thumbColor="rgba(255,255,255,1)"
              trackColor={{
                true: "rgba(4,4,4,1)",
                false: "rgba(255,255,255,1)"
              }}
              disabled={false}
              style={styles.switch1}
            ></Switch>
            <Icon name="chevron-small-down" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect1: {
    backgroundColor: "rgba(30,30,30,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 8,
    flex: 1,
    marginBottom: 9,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8
  },
  switch2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    marginTop: 3
  },
  switch2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch1: {
    marginRight: 9
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  switch1Row: {
    height: 23,
    flexDirection: "row"
  },
  switch2Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 16,
    marginRight: 8
  },
  rect2: {
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 8,
    flex: 1,
    marginTop: 30
  }
});

export default ControlPanelMod;
