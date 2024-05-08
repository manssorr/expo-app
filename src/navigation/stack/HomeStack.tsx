// ** Core Packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

// **** Assets ****
// ** import icons

// ** import assets

// ** import third party

// ** import shared components

// ** import specific components

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** types
import type { HomeStackParamList } from '@/navigation/types';
import HomeScreen from '@/screens/home';
import EditTaskScreen from '@/screens/edit-task';

// ** local constants
const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = (): React.ReactElement => {
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditTask" component={EditTaskScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
