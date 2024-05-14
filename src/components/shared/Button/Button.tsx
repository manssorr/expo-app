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
import theme, { Box, Text, type Theme } from '@/utils/theme';
import type { ComponentPropsWithoutRef } from 'react';
import type { Size } from '@/types';
import { buttonSizes, buttonVariants } from '@/utils/theme/button-variants';
import ButtonWrapper from '@/components/shared/Button/ButtonWrapper';

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
  size: Size;
  color?: ColorProps<Theme>;
}

type RestyleProps = VariantProps<Theme, 'buttonVariants'> &
  ColorProps<Theme> &
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
  spacingShorthand,
  spacing,
  layout,
  position,
  shadow,
];

const composedRestyleFunction = composeRestyleFunctions<Theme, RestyleProps>(
  restyleFunctions,
);

const mapVariantToColorsObj = (variant: any, color: any) => {
  const all: any = {
    filled: {
      color,
      backgroundColor: color,
    },
    outline: {
      color,
      borderColor: color,
    },
    ghost: {
      colorbg: 'transparent',
    },
  };
  return all[variant];
};

/**
 * Button
 * @param props
 * @category Components
 * @subcategory Shared
 * @rule the wrapperPorps and pressableProps are optional but if provides will override the default props
 * @example
 * import { Button } from '@/components/shared';
import { textVariants } from '../../../utils/theme/text-variants';
import { colors } from '../../../utils/theme/colors';
 * <Button
 *   label="Button"
 *   onPress={() => {}}
 * />
 */
const Button = ({
  capitalized = true,
  label,
  size = 'md',
  // borderRadius = 'md',
  ...rest
}: IProps & RestyleProps): React.ReactElement<IProps & RestyleProps> => {
  // ** Props
  const props = useRestyle(composedRestyleFunction, rest);

  // ** Constants props
  const variant = rest.variant ?? 'filled';
  const color = rest.color;
  const textVariants = buttonSizes[size].textVariants;

  // ** dynamic props
  let bgColor = buttonVariants[variant].bg;
  let borderColor = buttonVariants[variant].borderColor;

  let fontSize =
    theme.buttonVariants[variant as keyof Theme['buttonVariants']].fontSize;
  let textColor = theme.buttonVariants[variant as keyof Theme['buttonVariants']]
    .color as keyof Theme['colors'];

  console.log('rest', variant, rest);
  console.log('fontSize', variant, fontSize);
  console.log('fontSize', variant, fontSize);
  console.log('borderColor', variant, borderColor);

  // ** Constants

  // ** Redux State

  // ** Local State

  // ** useEffect

  // ** Event Handlers

  // ** Operations
  if (capitalized) {
    label = label.toUpperCase();
  }

  if (color) {
    textColor = mapVariantToColorsObj(variant, color).color;
    bgColor = mapVariantToColorsObj(variant, color).backgroundColor;
    borderColor = mapVariantToColorsObj(variant, color).borderColor;
  }

  return (
    <ButtonWrapper
      {...props}
      backgroundColor={bgColor}
      borderColor={borderColor}>
      <Text
      // variant="itemTitle"
      // fontSize={theme.buttonVariants[variant as keyof Theme['buttonVariants']].fontSize}
      // color={theme.buttonVariants[variant as keyof Theme['buttonVariants']].color as keyof Theme['colors']}>
      >
        {label}
      </Text>
    </ButtonWrapper>
  );
};

export default Button;

const styles = StyleSheet.create({});
