// ** Core Packages
import { Text, SafeAreaView, StyleSheet } from 'react-native';

// **** Assets ****
// ** import icons

// ** import assets

// ** import third party

// ** import shared components
import Button from '@/components/Button';
import { Box } from '@/utils/theme';

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

  // ** Event Handlers

  // ** Operations

  return (
    <SafeAreaView>
      <Box>
        <Text>Do you want to be more productive?</Text>
        <Button text="Start your journey" />
      </Box>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
