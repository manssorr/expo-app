// ** Core Packages
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import { Box, Text } from '@/utils/theme';

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

interface IProps {
  text: string;
  capitalized?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}

// ** local constants

const Button = (props: IProps): React.ReactElement<IProps> => {
  // ** Props
  // Constants props
  const { capitalized = true, onPress } = props;

  // Dynamic props
  let { text } = props;

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Event Handlers

  // ** Operations
  if (capitalized) {
    text = text.toUpperCase();
  }

  return (
    <Box
      backgroundColor="primary"
      borderRadius="rounded-7xl"
      alignItems="center"
      p="4">
      <TouchableOpacity onPress={onPress}>
        <Text color="white"> {text}</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Button;

const styles = StyleSheet.create({});
