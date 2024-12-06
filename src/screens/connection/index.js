import React, { Component } from "react";
import { StyleSheet, View, StatusBar, TextInput, Text } from "react-native";

function Connection(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <View style={styles.rect}>
        <View style={styles.rect3}>
          <TextInput
            placeholder="Username"
            style={styles.textInput1}
          ></TextInput>
        </View>
        <View style={styles.rect5}>
          <Text style={styles.connect}>CONNECT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderColor: "#000000",
    justifyContent: "center"
  },
  rect: {
    height: 420,
    width: 260,
    borderRadius: 8,
    alignSelf: "center"
  },
  rect3: {
    height: 48,
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 140,
    marginLeft: 34,
    marginRight: 34
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 172,
    alignSelf: "center"
  },
  rect5: {
    height: 48,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    marginTop: 22,
    marginLeft: 34,
    marginRight: 34
  },
  connect: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 172,
    textAlign: "center",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default Connection;
