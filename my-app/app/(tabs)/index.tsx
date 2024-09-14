import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, alignSelf: "stretch" }}>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
