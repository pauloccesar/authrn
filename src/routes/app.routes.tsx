import React from "react";
import Dashboard from "../pages/Dashboard";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const Approutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default Approutes;