import React from "react";
import { View } from "react-native";
import AddTask from "../../components/AddTask";

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddTask />
    </View>
  );
};

export default Layout;
