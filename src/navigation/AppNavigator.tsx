// ** Core Packages
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stack/AuthStack';
import RootStack from '@/navigation/stack/RootStack';
import useUserGlobalStore from '@/store/useUserGlobalStore';
import { useEffect } from 'react';

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

const AppNavigator = (): React.ReactElement => {
  // ** Props
  // Constants props
  // Dynamic props

  // ** Constants

  // ** Redux State
  const user = useUserGlobalStore(state => state.user);
  const updateUser = useUserGlobalStore(state => state.updateUser);
  const resetUser = useUserGlobalStore(state => state.resetUser);

  // ** Local State
  useEffect(() => {
    // if (!user) {
    //   updateUser({
    //     email: 'X5h2H@example.com',
    //     name: 'John Doe',
    //   });
    // }
    console.log('User changed', user);
  }, [user]);

  // ** useEffect

  // ** Event Handlers

  // ** Operations
  resetUser();

  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <RootStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
