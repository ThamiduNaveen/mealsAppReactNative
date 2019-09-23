import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { MEALS } from "../data/dummy-data";
import {
  FlatList,
  TouchableNativeFeedback
} from "react-native-gesture-handler";

const CategoryMealsScreen: any = props => {
  const catId = props.navigation.getParam("item").id;
  const displayData = MEALS.filter(meel => meel.categoryId.includes(catId));
  const [isColapsedLines, setColapsedLines] = useState({
    touched: false,
    key: ""
  });
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayData}
        renderItem={data => {
          return (
            <TouchableNativeFeedback
              onPressIn={() => {
                setColapsedLines({ touched: true, key: data.item.id });
              }}
              onPressOut={() => {
                setColapsedLines({ touched: false, key: "" });
              }}
              style={{
                ...styles.gridItem
              }}
              onPress={() => {
                props.navigation.navigate({
                  routeName: "MealDetails",
                  params: { item: data.item }
                });
              }}
            >
              <View style={{ flex: 1 }}>
                <ImageBackground
                  //fadeDuration={1000}
                  // source={require("../assets/Images/sucess.jpg")}
                  source={{
                    cache: "force-cache",
                    uri: data.item.imageUrl
                  }}
                  style={styles.image}
                  resizeMode="cover"
                >
                  <Text
                    numberOfLines={
                      isColapsedLines.touched &&
                      data.item.id === isColapsedLines.key
                        ? null
                        : 1
                    }
                    style={styles.title}
                  >
                    {data.item.title}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("item").title;
  return {
    title: title
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    padding: 7,
    backgroundColor: "rgba(0,0,0,0.7)"
  }
});

export default CategoryMealsScreen;
/*onPress={() => {
    props.navigation.navigate({ routeName: "MealDetails" });
    //props.navigation.push("CategoryMeals");
    //I can navigathe to same page with the use of push
    //props.navigation.goBack();
    //props.navigation.pop(); //only in stack navigator
    //Above is use to go back
    //props.navigation.popToTop(); //only in stack navigator
    //above is use to pop to begining
    //props.navigation.replace( "MealDetails"); //only in stack navigator
    //above will replace the stack with "MealDetails" used in login screen so user cant go back
  }}*/
