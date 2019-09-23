import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Meal Categories"
      }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.PrimaryColor
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "500"
      }
    }
  }
);

const mealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarLabel:"Meals!!!!",
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name={"ios-restaurant"}
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorite: FavoritesScreen
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "yellow",
      activeTintColor: "red"
    }
  }
);

export default createAppContainer(mealsTabNavigator);
