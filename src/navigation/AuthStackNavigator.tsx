// ** Core Packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// **** Assets ****
// ** import icons

// ** import assets

// ** import third party

// ** import shared components

// ** import specific components
import SignInScreen from '@/screens/sign-in-screen/SignInScreen';
import SignUpScreen from '@/screens/sign-up-screen/SignUpScreen';
import WelcomeScreen from '@/screens/welcome-screen/WelcomeScreen';

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** types
import type { AuthStackParamList } from '@/navigation/types';

// ** local constants
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = (): React.ReactElement => {
  // Constants

  // Redux State

  // Local State

  // useEffect

  // Event Handlers

  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: true }}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
