import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import RoomButton from "./RoomButton";
import AddRoomButton from "./AddRoomButton";
import { useNavigation } from "@react-navigation/native";
import { verticalScale, horizontalScale, moderateScale } from "../../utils/metrics";


function RoomScrollView(props) {
  const Rooms = props.rooms;

  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.roomsColumn}>
          <Text style={styles.rooms}>Rooms</Text>
          <AddRoomButton style={styles.addRoomButton}></AddRoomButton>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
            showsVerticalScrollIndicator={true}
          >
              {Rooms && Rooms.map && Rooms.map((item, index) => (
                <RoomButton 
                    style={styles.roomButton}
                    key={item._id}
                    title={item.name}
                    onPress={() => navigation.navigate('Room', { room: item._id })}
                    switchesCount={item.switches.length}
                    outletsCount={item.outlets.length}
                ></RoomButton>
                ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 8
  },
  rect2: {
    backgroundColor: "rgba(17,17,17,1)",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#000000",
    overflow: "hidden",
    flex: 1
  },
  rooms: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(10)
  },
  addRoomButton: {
    marginHorizontal: horizontalScale(5),
    position: 'absolute',
    right: 0
  },
  roomsColumn: {
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
  roomButton: {
    height: verticalScale(110),
    marginVertical: verticalScale(2),
    alignSelf: "stretch"
  }
});

export default RoomScrollView;
