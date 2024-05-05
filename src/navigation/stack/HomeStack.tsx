// ** Core Packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// **** Assets ****
// ** import icons

// ** import assets

// ** import third party

// ** import shared components

// ** import specific components
import SignInScreen from '@/screens/sign-in/SignInScreen';
import SignUpScreen from '@/screens/signup/SignUpScreen';
import WelcomeScreen from '@/screens/welcome-screen/WelcomeScreen';

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** types
import type { HomeStackParamList } from '@/navigation/types';

// ** local constants
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = (): React.ReactElement => {
  // Constants

  // Redux State

  // Local State

  // useEffect

  // Event Handlers

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="EditTask" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
