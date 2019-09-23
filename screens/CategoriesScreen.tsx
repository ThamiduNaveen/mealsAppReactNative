import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen: any = props => {
  const renderGridItems = itemData => {
    return (
      <TouchableOpacity
        style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { item: itemData.item }
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItems}
    />
  );
};

// CategoriesScreen.navigationOptions = {
//   title: "Meal Categories",
//   headerStyle: {
//     backgroundColor: Colors.PrimaryColor
//   },
//   headerTintColor: "#fff",
//   headerTitleStyle: {
//     fontWeight: "bold"
//   }
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150
  }
});

export default CategoriesScreen;
