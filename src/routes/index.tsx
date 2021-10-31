import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native"
import AuthContext from "../contexts/auth";
import Approutes from "./app.routes";
import Authroutes from "./auth.routes";

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  return signed ? <Approutes /> : <Authroutes />
}

export default Routes;