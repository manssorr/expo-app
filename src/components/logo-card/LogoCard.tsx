// ** Core Packages
import IMAGES from '@/assets/images';
import { Box, Text } from '@/utils/theme';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

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

interface IProps {}

// ** local constants

const LogoCard = (props: IProps): React.ReactElement<IProps> => {
  // ** Props
  // Constants props

  // Dynamic props

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Custom hooks

  // ** Event Handlers

  // ** Operations

  return (
    <Box flexDirection="row">
      <Image
        style={styles.image}
        source={IMAGES.logo}
        contentFit="cover"
        transition={1000}
      />
      <Box
        flexDirection="column"
        // bg="amber200"
        alignItems="flex-start"
        justifyContent="center">
        <Text variant="header">Todomi</Text>
        <Text variant="textSm">Doneontime</Text>
      </Box>
    </Box>
  );
};

export default LogoCard;

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
  },
});
