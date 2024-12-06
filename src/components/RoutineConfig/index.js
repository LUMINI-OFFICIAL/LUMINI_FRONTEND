import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';

function RoutineConfig(props) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showFromTimePicker, setShowFromTimePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  const [showToTimePicker, setShowToTimePicker] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(null);

  const presets = [
    { label: 'Preset 1', value: 'preset1' },
    { label: 'Preset 2', value: 'preset2' },
    { label: 'Preset 3', value: 'preset3' },
  ];

  const handleFromDateChange = (event, selectedDate) => {
    setShowFromDatePicker(false);
    if (selectedDate) {
      setFromDate(selectedDate);
    }
  };

  const handleFromTimeChange = (event, selectedTime) => {
    setShowFromTimePicker(false);
    if (selectedTime) {
      const currentDate = new Date(fromDate);
      currentDate.setHours(selectedTime.getHours());
      currentDate.setMinutes(selectedTime.getMinutes());
      setFromDate(currentDate);
    }
  };

  const handleToDateChange = (event, selectedDate) => {
    setShowToDatePicker(false);
    if (selectedDate) {
      setToDate(selectedDate);
    }
  };

  const handleToTimeChange = (event, selectedTime) => {
    setShowToTimePicker(false);
    if (selectedTime) {
      const currentDate = new Date(toDate);
      currentDate.setHours(selectedTime.getHours());
      currentDate.setMinutes(selectedTime.getMinutes());
      setToDate(currentDate);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (showFromDatePicker) setShowFromDatePicker(false);
      if (showFromTimePicker) setShowFromTimePicker(false);
      if (showToDatePicker) setShowToDatePicker(false);
      if (showToTimePicker) setShowToTimePicker(false);
    }
  }, [showFromDatePicker, showFromTimePicker, showToDatePicker, showToTimePicker]);

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.settings}>Settings</Text>
      <View style={styles.rect}>
        <View style={styles.fromRow}>
          <Text style={styles.from}>From</Text>
          <Text onPress={() => setShowFromDatePicker(true)} style={styles.dateText}>
            {fromDate.toLocaleDateString()}
          </Text>
          <Text onPress={() => setShowFromTimePicker(true)} style={styles.dateText}>
            {fromDate.toLocaleTimeString()}
          </Text>
          {showFromDatePicker && (
            <DateTimePicker
              value={fromDate}
              mode="date"
              display="default"
              onChange={handleFromDateChange}
              style={styles.dateTimePicker}
            />
          )}
          {showFromTimePicker && (
            <DateTimePicker
              value={fromDate}
              mode="time"
              display="default"
              onChange={handleFromTimeChange}
              style={styles.dateTimePicker}
            />
          )}
        </View>
        <View style={styles.toRow}>
          <Text style={styles.to}>To</Text>
          <Text onPress={() => setShowToDatePicker(true)} style={styles.dateText}>
            {toDate.toLocaleDateString()}
          </Text>
          <Text onPress={() => setShowToTimePicker(true)} style={styles.dateText}>
            {toDate.toLocaleTimeString()}
          </Text>
          {showToDatePicker && (
            <DateTimePicker
              value={toDate}
              mode="date"
              display="default"
              onChange={handleToDateChange}
              style={styles.dateTimePicker}
            />
          )}
          {showToTimePicker && (
            <DateTimePicker
              value={toDate}
              mode="time"
              display="default"
              onChange={handleToTimeChange}
              style={styles.dateTimePicker}
            />
          )}
        </View>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.preset}>Preset</Text>
        <Dropdown
          style={styles.dropdown}
          data={presets}
          labelField="label"
          valueField="value"
          placeholder="Select a preset"
          value={selectedPreset}
          onChange={(item) => {
            setSelectedPreset(item.value);
          }}
        />
      </View>
      <View style={styles.rect5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(17,17,17,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 8
  },
  settings: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 15
  },
  rect: {
    height: 60,
    backgroundColor: "rgba(32,32,32,1)",
    borderRadius: 8,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16
  },
  from: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginTop: 3
  },
  dateText: {
    fontSize: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginLeft: 10,
    color: '#fff'
  },
  dateTimePicker: {
    width: 200,
  },
  r2: {
    height: 19,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 47
  },
  fromRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    marginRight: 17
  },
  to: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginTop: 3
  },
  rect3: {
    height: 19,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 59
  },
  toRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 12,
    marginRight: 17
  },
  rect4: {
    height: 28,
    backgroundColor: "rgba(32,32,32,1)",
    borderRadius: 8,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 16,
    marginRight: 16
  },
  preset: {
    fontFamily: "roboto-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginLeft: 12,
    marginTop: 8
  },
  dropdown: {
    height: 19,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginRight: 17,
    marginLeft: 17,
    marginTop: 5
  },
  rect5: {
    width: 283,
    height: 1,
    backgroundColor: "rgba(32,32,32,1)",
    borderRadius: 8,
    marginTop: 7,
    marginLeft: 16
  }
});

export default RoutineConfig;
