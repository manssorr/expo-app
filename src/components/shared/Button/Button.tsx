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

// ** import specific components

// ** import sub pages/sections

// ** import config

// ** import state manager

// ** import utils

// ** import hooks

// ** import apis

// ** import/local types
interface IProps {
  label: string;
  capitalized?: boolean;
}

type RestyleProps = VariantProps<Theme, 'buttonVariants'> &
  BackgroundColorShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingShorthandProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  BorderProps<Theme> &
  ShadowProps<Theme> &
  ComponentPropsWithoutRef<typeof TouchableOpacity>;

// ** local constants
const variant = createVariant<Theme, 'buttonVariants'>({
  themeKey: 'buttonVariants',
});

const restyleFunctions = [
  backgroundColorShorthand,
  backgroundColor,
  spacingShorthand,
  spacing,
  layout,
  position,
  border,
  shadow,
  variant,
];

const composedRestyleFunction = composeRestyleFunctions<Theme, RestyleProps>(
  restyleFunctions,
);

/**
 * Button
 * @param props
 * @category Components
 * @subcategory Shared
 * @rule the wrapperPorps and pressableProps are optional but if provides will override the default props
 * @example
 * import { Button } from '@/components/shared';
 * <Button
 *   label="Button"
 *   onPress={() => {}}
 * />
 */
const Button = ({
  capitalized = true,
  label,
  ...rest
}: IProps & RestyleProps): React.ReactElement<IProps & RestyleProps> => {
  // ** Props
  // ** Constants props

  // ** ynamic props

  const props = useRestyle(composedRestyleFunction, rest);

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Event Handlers

  // ** Operations
  if (capitalized) {
    label = label.toUpperCase();
  }

  return (
    <TouchableOpacity
      {...props}
      // style={styles.normalizeWidth}
    >
      <Text color="white"> {label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
