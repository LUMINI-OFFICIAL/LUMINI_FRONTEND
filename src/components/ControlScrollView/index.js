import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ControlPanel from "./ControlPanel";
import ControlPanelMod from "./ControlPanelMod";
import { horizontalScale, verticalScale } from "../../utils/metrics";

function ControlScrollView(props) {
  const [room, setRoom] = useState({});
  
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <Text style={styles.room1}>{props.name}</Text>
        <View style={styles.scrollAreaStack}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
              showsVerticalScrollIndicator={true}
            >
                {room.switches && room.switches.map && room.switches.map((item, index) => (
                  <ControlPanel 
                    key={index}
                    name={item.name}
                    isEnabled={item.state}
                    style={styles.controlPanel} />
                ))}
                <ControlPanel 
                  style={styles.controlPanel}
                  name="Switch"
                  isEnabled={false}
                ></ControlPanel>
                <ControlPanelMod style={styles.controlPanelMod}></ControlPanelMod>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    backgroundColor: "rgba(17,17,17,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000",
    flex: 1
  },
  room1: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    height: 16,
    width: 83,
    marginTop: 10,
    marginLeft: 18
  },
  scrollArea: {
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 8,
    flex: 1,
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10)
  },
  scrollArea_contentContainerStyle: {
    flexGrow: 1,
    height: 'auto',
    alignItems: 'center',
    overflow: 'visible'
  },
  rect3: {
    top: 0,
    position: "absolute",
    justifyContent: "flex-start",
    alignItems: "center",
    left: 0,
    right: 0
  },
  controlPanel: {
    height: 100,
    alignSelf: "stretch"
  },
  controlPanelMod: {
    height: 200,
    alignSelf: "stretch"
  },
  scrollAreaStack: {
    flex: 1,
    marginBottom: 11,
    marginTop: 4,
    marginLeft: 9,
    marginRight: 9
  }
});

export default ControlScrollView;
