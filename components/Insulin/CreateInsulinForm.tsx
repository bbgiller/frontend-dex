import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useCreateInsulin from "./useCreateInsulin";

const CreateInsulinForm = () => {
  const [dose, setDose] = useState("");
  const [time, setTime] = useState(new Date());
  const [type, setType] = useState("");
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const { createInsulin, loading, error } = useCreateInsulin();

  const notAllFields = !dose || !time || !type;

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleDatePicked = (datetime: Date) => {
    setTime(datetime);
    hideDateTimePicker();
  };

  const handleSubmit = async () => {
    // Validate input values
    if (notAllFields) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await createInsulin(Number(dose), time, type);
      // Clear form inputs
      setDose("");
      setTime(new Date());
      setType("");
    } catch (err) {
      alert("Error creating insulin record.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dose:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dose"
        value={dose}
        onChangeText={setDose}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Time:</Text>
      <TouchableOpacity style={styles.dateButton} onPress={showDateTimePicker}>
        <Text style={styles.dateButtonText}>{time.toLocaleString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />

      <Text style={styles.label}>Type:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "short" && styles.activeTypeButton,
            !type && styles.disabledTypeButton,
          ]}
          // disabled={!type}
          onPress={() => setType("short")}
        >
          <Text style={styles.typeButtonText}>Short</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "long" && styles.activeTypeButton,
            !type && styles.disabledTypeButton,
          ]}
          // disabled={!type}
          onPress={() => setType("long")}
        >
          <Text style={styles.typeButtonText}>Long</Text>
        </TouchableOpacity>
      </View>
      <Button
        style={styles.submitButton}
        title="Create Insulin"
        onPress={handleSubmit}
        disabled={loading || notAllFields}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dateButton: {
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  typeButton: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  activeTypeButton: {
    backgroundColor: "green",
  },
  disabledTypeButton: {
    opacity: 0.5,
  },
  typeButtonText: {
    fontSize: 16,
    color: "white",
  },
  submitButton: {
    height: 40,
  },
});

export default CreateInsulinForm;
