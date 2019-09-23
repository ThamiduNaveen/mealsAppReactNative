import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  HeaderButtons,
  Item,
  HeaderButton
} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen: any = props => {
  const item = props.navigation.getParam("item");
  console.log(item);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        data={item.steps}
        renderItem={step => {
          return <Text>{step.item}</Text>;
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("item").title;
  return {
    title: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("pressed");
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealDetailsScreen;
