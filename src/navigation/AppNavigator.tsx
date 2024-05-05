// ** Core Packages
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stack/AuthStack';

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

// ** import/local types

// ** local constants

const MainNavigator = (): React.ReactElement => {
  // ** Props
  // Constants props
  // Dynamic props

  // ** Constants
  const user = true;

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Event Handlers

  // ** Operations

  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <HomeTab />}
    </NavigationContainer>
  );
};

export default MainNavigator;