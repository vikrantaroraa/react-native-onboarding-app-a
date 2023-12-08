import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const clearOnboarding = async () => {
  try {
    await AsyncStorage.removeItem("@viewedOnboarding");
  } catch (error) {
    console.log("error @removeItem: ", error);
  }
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Pressable onPress={clearOnboarding}>
        <Text>Clear Onboarding</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
