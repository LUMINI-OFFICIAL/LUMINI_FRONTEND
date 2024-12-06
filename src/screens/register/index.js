import axios from "axios";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { REGISTER_URL } from "../../../config";
import validateUsername from "../../validations/validateUsername";
import validatePassword from "../../validations/validatePassword";
import { useNavigation } from "@react-navigation/native";
import { horizontalScale, verticalScale, moderateScale } from "../../utils/metrics";

function Register(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(' ');
  const [passwordError, setPasswordError] = useState(' ');

  const [registerError, setRegisterError] = useState('');

  const navigation = useNavigation();

  const register = async () => {
    try {
      const response = await axios.post(REGISTER_URL, { username, password });
      ToastAndroid.show('Successfully registered user', ToastAndroid.SHORT);
      navigation.navigate('Register');
    } catch (error) {
      if (error.isAxiosError) {
        setRegisterError("Username unavailable!");
        return;
      }
      setRegisterError("Something went wrong!");
      console.error(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden barStyle="dark-content" />
      <View style={styles.rect}>
        <View style={styles.loremIpsumColumn}>
          <Text style={styles.loremIpsum}>{registerError + " \n " + usernameError + " \n " + passwordError}</Text>
          <View style={styles.rect3}>
            <TextInput
              onChangeText={val => {
                setUsernameError(validateUsername(val));
                setUsername(val);
              }}
              placeholder="Username"
              placeholderTextColor="rgba(188,188,188,1)"
              style={styles.textInput1}
            ></TextInput>
          </View>
          <View style={styles.rect4}>
            <TextInput
              onChangeText={val => {
                setPasswordError(validatePassword(val));
                setPassword(val);
              }}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="rgba(188,188,188,1)"
              style={styles.textInput2}
            ></TextInput>
          </View>
        </View>
        <View style={styles.loremIpsumColumnFiller}></View>
        <View style={styles.button2Column}>
          <TouchableOpacity
            style={styles.button2}
            onPress={register}
            disabled={!!usernameError && !!passwordError}
          >
            <Text style={styles.login3}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.text3}>LOGIN</Text>
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
  text3: {
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

export default Register;
