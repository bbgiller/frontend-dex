import { StyleSheet } from "react-native";
export const CreatInsulinFormStyles = StyleSheet.create({
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
