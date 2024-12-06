import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import PresetButton from "./PresetButton";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/metrics";
import AddPresetButton from "./AddPresetButton";
import { useNavigation } from "@react-navigation/native";

function PresetList(props) {
  const preset = props.presets;

  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.routineColumn}>
        <Text style={styles.routines}>Routines</Text>
        <AddPresetButton style={styles.addPresetButton}></AddPresetButton>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          {preset && preset.map && preset.map((item, index) => (
            <PresetButton 
              style={styles.presetButton}
              key={item._id}
              title={item.name}
              isActive={item.state}
              onPress={() => navigation.navigate('Routine', { routine: item._id })}
            ></PresetButton>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(17,17,17,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000",
  },
  routines: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(10),
  },
  addPresetButton: {
    marginHorizontal: horizontalScale(5),
    position: 'absolute',
    right: 0
  },
  routineColumn: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(12),
    marginTop: verticalScale(12)
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
    height: "auto",
    overflow: "visible",
    alignItems: "center"
  },
  presetButton: {
    height: verticalScale(50),
    marginVertical: verticalScale(2),
    alignSelf: "stretch"
  }
});

export default PresetList;