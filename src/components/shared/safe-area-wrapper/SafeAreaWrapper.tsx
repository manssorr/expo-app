// ** Core Packages
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';

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

interface IProps extends SafeAreaViewProps {}

// ** local constants

const SafeAreaWrapper = (props: IProps): React.ReactElement<IProps> => {
  // ** Props
  // Constants props
  const { children } = props;

  // Dynamic props

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Custom hooks

  // ** Event Handlers

  // ** Operations

  return (
    <SafeAreaView style={styles.container} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
