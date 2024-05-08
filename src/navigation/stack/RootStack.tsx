// ** Core Packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// **** Assets ****
// ** import icons

// ** import assets

// ** import third party

// ** import shared components

// ** import specific components
import SigninScreen from '@/screens/signin/SigninScreen';
import SignupScreen from '@/screens/signup/SignupScreen';
import WelcomeScreen from '@/screens/today/welcome/WelcomeScreen';

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** types
import type { AppStackParamList } from '@/navigation/types';
import HomeButtomTab from '@/navigation/tab/HomeButtomTab';

// ** local constants
const Stack = createNativeStackNavigator<AppStackParamList>();

const RootStack = (): React.ReactElement => {
  // Constants

  // Redux State

  // Local State

  // useEffect

  // Event Handlers

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={HomeButtomTab} />
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
