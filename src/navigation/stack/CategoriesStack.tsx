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
import type { CategoriesStackParamList } from '@/navigation/types';
import CategoriesScreen from '@/screens/categories/CategoriesScreen';
import CreateCategoryScreen from '@/screens/create-category/CreateCategoryScreen';
import CategoryScreen from '@/screens/category/CategoryScreen';

// ** local constants
const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStack = (): React.ReactElement => {
  // Constants

  // Redux State

  // Local State

  // useEffect

  // Event Handlers

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="CreateCategory" component={CreateCategoryScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesStack;

const styles = StyleSheet.create({});
