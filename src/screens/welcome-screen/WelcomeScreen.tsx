// ** Core Packages
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// **** Assets ****
// ** import icons

// ** import assets

// ** import third party

// ** import shared components
import Button from '@/components/Button';
import { Box } from '@/utils/theme';
import { useNavigation } from '@react-navigation/native';
import type { AuthScreenNavigationType } from '@/navigation/types';

// ** import specific components

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** import/local types

interface IProps {}

// ** local constants

const WelcomeScreen = (props: IProps): React.ReactElement<IProps> => {
  // ** Props
  // Constants props

  // Dynamic props

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Custom Hooks
  const navigation = useNavigation<AuthScreenNavigationType<'Welcome'>>();

  // ** Event Handlers
  const navigateToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };
  const handleOnStartPress = () => {
    navigateToSignInScreen();
  };

  // ** Operations

  return (
    <SafeAreaView>
      <Box>
        <Text>Do you want to be more productive?</Text>
        <Button text="Start your journey" onPress={handleOnStartPress} />
      </Box>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
