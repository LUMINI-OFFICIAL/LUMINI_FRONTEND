import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/home";
import Room from "../../screens/Room";

import { verticalScale, moderateScale } from "../../utils/metrics";

function Navbar(props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: styles.container
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIconsIcon name="power-settings-new" style={styles.tabIcon}></MaterialIconsIcon>
            );
          }
        }}
      />
      <Tab.Screen 
        name="Statistic" 
        component={Room}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <EntypoIcon name="line-graph" style={styles.tabIcon}></EntypoIcon>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    borderTopWidth: 0,
    position: "absolute",
    height: verticalScale(50)
  },
  tabIcon: {
    alignSelf: 'center',
    fontSize: moderateScale(25),
    color: '#fff'
  }
});

export default Navbar;
