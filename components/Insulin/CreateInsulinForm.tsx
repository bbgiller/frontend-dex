import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { CreatInsulinFormStyles as styles } from "../../styles/CreateInsulinFormStyles";
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
      <View style={styles.form}>
        <Text style={styles.label}>Dose:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter dose"
          value={dose}
          onChangeText={setDose}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Time:</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={showDateTimePicker}
        >
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
    </View>
  );
};

export default CreateInsulinForm;
