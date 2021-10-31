import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

const SignIn: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);
  console.log(signed);

  async function handleSingIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSingIn} />
    </View>
  )
};
export default SignIn;