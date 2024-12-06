import React, { Component, useContext, useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import PresetList from "../../components/PresetList";
import RoomScrollView from "../../components/RoomScrollView";
import { horizontalScale, verticalScale, moderateScale } from "../../utils/metrics";
import { WebSocketContext, useMessagesContext } from "../../utils/WebSocketProvider";

function Home(props) {

  const { initializeWebSocket, messages } = useContext(WebSocketContext);

  useEffect(() => {
    const initWS = async () => {
      await initializeWebSocket('Home');
    }

    initWS();
  }, []);

  const [rooms, presets] = messages;
  return (
    <View style={styles.container}>
      <StatusBar hidden animated barStyle="dark-content" />
      <PresetList style={styles.presetList} presets={presets}></PresetList>
      <RoomScrollView style={styles.scrollview} rooms={rooms}></RoomScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  presetList: {
    height: verticalScale(200),
    marginTop: verticalScale(27),
    marginHorizontal: horizontalScale(20)
  },
  scrollview: {
    borderRadius: 8,
    flex: 1,
    marginBottom: verticalScale(60),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20)
  }
});

export default Home;
