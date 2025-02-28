import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
