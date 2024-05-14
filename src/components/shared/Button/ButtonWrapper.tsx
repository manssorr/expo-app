// ** Core Packages
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

// ** import icons

// ** import assets

// ** import third party
import {
  backgroundColor,
  backgroundColorShorthand,
  border,
  color,
  composeRestyleFunctions,
  createVariant,
  layout,
  position,
  shadow,
  spacing,
  spacingShorthand,
  useRestyle,
  type BackgroundColorProps,
  type BackgroundColorShorthandProps,
  type BorderProps,
  type ColorProps,
  type LayoutProps,
  type PositionProps,
  type ShadowProps,
  type SpacingProps,
  type SpacingShorthandProps,
  type VariantProps,
} from '@shopify/restyle';

// ** import shared components
import { Box, Text, type Theme } from '@/utils/theme';
import type { ComponentPropsWithoutRef } from 'react';
import type { Size } from '@/types';
import { buttonSizes, buttonVariants } from '@/utils/theme/button-variants';

// ** import specific components

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** import/local types
interface IProps {}

type RestyleProps = VariantProps<Theme, 'buttonVariants'> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  SpacingShorthandProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  ShadowProps<Theme> &
  ComponentPropsWithoutRef<typeof TouchableOpacity>;

// ** local constants
const variants = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
});

const restyleFunctions = [
  variants,
  color,
  backgroundColor,
  backgroundColorShorthand,
  spacingShorthand,
  spacing,
  layout,
  position,
  shadow,
];

const composedRestyleFunction = composeRestyleFunctions<Theme, RestyleProps>(
  restyleFunctions,
);

/**
 * ButtonWrapper
 * @description ButtonWrapper is a wrapper component for Button to pass restyle props
 */
const ButtonWrapper = ({
  ...rest
}: IProps & RestyleProps): React.ReactElement<IProps & RestyleProps> => {
  // ** Props
  const props = useRestyle(composedRestyleFunction, rest);
  console.log(`props`, props);

  // ** Constants props

  // ** ynamic props

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Event Handlers

  // ** Operations

  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

export default ButtonWrapper;

const styles = StyleSheet.create({});
