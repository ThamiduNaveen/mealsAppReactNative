import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilterScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FilterScreen!</Text>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
