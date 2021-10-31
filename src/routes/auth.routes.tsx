import React from "react";
import SignIn from "../pages/Signin";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const Authroutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default Authroutes;