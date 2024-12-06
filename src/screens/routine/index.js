import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import RoutineConfig from "../../components/RoutineConfig";
import BackButton from "../../components/BackButton";
import RoutineScrollView from "../../components/RoutineScrollView";
import { verticalScale, horizontalScale } from "../../utils/metrics";
import { ROUTINE_URL } from "../../../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Routine(props) {
  const [preset, setPreset] = useState({});
  const [axiosError,setAxiosError] = useState('');

  useEffect(() => {
    const fetchPreset = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(ROUTINE_URL + `/${props.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPreset(response.data);
      } catch (error) {
        console.error(error);
        if (error.isAxiosError) {
          setAxiosError(error.response ? error.response.data.message : "Something went wrong");
          return;
        }
        setAxiosError("Something went wrong")
      }
    }

    fetchPreset();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <View style={styles.routineColumn}>
        <Text style={styles.routines}>Routines</Text>
      </View>
      <RoutineConfig style={styles.routineConfig}></RoutineConfig>
      <RoutineScrollView style={styles.routineScrollView}></RoutineScrollView>
      <BackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderColor: "#000000"
  },
  routineConfig: {
    height: verticalScale(200),
    marginTop: verticalScale(27),
    marginHorizontal: horizontalScale(20)
  },
  routineScrollView: {
    borderRadius: 8,
    flex: 1,
    marginBottom: verticalScale(60),
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(20)
  }
});

export default Routine;
