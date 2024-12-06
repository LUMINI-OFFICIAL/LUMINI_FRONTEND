import React, { Component, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import axios from "axios";
import { LOGIN_URL } from "../../../config";
import { useNavigation } from "@react-navigation/native";
import { horizontalScale, verticalScale, moderateScale } from "../../utils/metrics";
import { WebSocketContext } from "../../utils/WebSocketProvider";

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState('');

  const { setIsLoggedIn } = useContext(WebSocketContext);

  const navigation = useNavigation();

  const login = async () => {
    try {
      const response = await axios.post(LOGIN_URL, { username, password })
      const token = response.data.data;
      await AsyncStorage.setItem('token', token);
      setIsLoggedIn(true);
      navigation.navigate('Navbar');
    } catch (error) {
      console.error(error);
      if (error.isAxiosError) {
        setLoginError(error.response ? error.response.data.message : "Something went wrong");
        return;
      }
      setLoginError("Something went wrong")
    }

  };
  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <View style={styles.rect}>
        <View style={styles.loremIpsumColumn}>
          <Text style={styles.loremIpsum}>{loginError + " \n  \n "}</Text>
          <View style={styles.rect3}>
            <TextInput
              onChangeText={val => setUsername(val)}
              placeholder="Username"
              placeholderTextColor="rgba(188,188,188,1)"
              style={styles.textInput1}
            ></TextInput>
          </View>
          <View style={styles.rect4}>
            <TextInput
              onChangeText={val => setPassword(val)}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(188,188,188,1)"
              style={styles.textInput2}
            ></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsumColumnFiller}></View>
        <View style={styles.button2Column}>
          <TouchableOpacity style={styles.button2} onPress={login}>
            <Text style={styles.login3}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>REGISTER</Text>
          </TouchableOpacity>
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
    borderRadius: 8,
    height: verticalScale(420),
    marginLeft: horizontalScale(50),
    marginRight: horizontalScale(50),
    justifyContent: 'center'
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(250,74,74,1)",
    textAlign: "left"
  },
  rect3: {
    height: 48,
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 24
  },
  textInput1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: moderateScale(18),
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(10)
  },
  rect4: {
    height: 48,
    backgroundColor: "rgba(30,30,30,1)",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 24
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    marginLeft: 10,
    marginRight: 10
  },
  loremIpsumColumn: {
    marginTop: 26,
    marginLeft: 34,
    marginRight: 34
  },
  loremIpsumColumnFiller: {
    flex: 1
  },
  button2: {
    height: 54,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    marginBottom: 10
  },
  login3: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    height: 24,
    width: 172,
    textAlign: "center",
    fontSize: 18,
    alignSelf: "center"
  },
  button: {
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    justifyContent: "center"
  },
  register: {
    fontFamily: "roboto-bold",
    color: "rgba(0,0,0,1)",
    height: 24,
    width: 172,
    textAlign: "center",
    fontSize: 18,
    alignSelf: "center"
  },
  button2Column: {
    marginBottom: 62,
    marginLeft: 34,
    marginRight: 34,
    marginTop: 34
  }
});

export default Login;
