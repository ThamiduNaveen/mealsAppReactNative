import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen!</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  