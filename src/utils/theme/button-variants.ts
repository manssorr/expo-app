import type { Size } from '@/types';
import type { Theme } from '@/utils/theme';
import type { TextProps, TextShadowProps } from '@shopify/restyle';
import type { TextStyle, ViewStyle } from 'react-native';

const sharedButtonStyles = {
  borderRadius: 'rounded-3xl',
  paddingVertical: 2,
  paddingHorizontal: 4,

  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
};

export const buttonSizes: Record<
  Size,
  {
    space: any;
    textVariants: TextProps<Theme>['variant'];
  }
> = {
  xs: {
    space: {
      py: '2',
      px: '3',
    },
    textVariants: 'textXs',
  },
  sm: {
    space: {
      p: '4',
    },
    textVariants: 'textSm',
  },
  md: {
    space: {
      py: '4',
      px: '6',
    },
    textVariants: 'textSm',
  },
  lg: {
    space: {
      py: '4',
      px: '7',
    },
    textVariants: 'textBase',
  },
  xl: {
    space: {
      py: '4',
      px: '8',
    },
    textVariants: 'textLg',
  },
};

export const buttonVariants: Record<
  'filled' | 'outlined' | 'ghost' | 'defaults',
  any
> = {
  filled: {
    ...sharedButtonStyles,
    bg: 'primary',
    color: 'white',
  },
  outlined: {
    ...sharedButtonStyles,
    bg: 'transparent',
    color: 'primary',

    // outline
    borderWidth: 1,
    borderColor: 'primary',
  },
  ghost: {
    ...sharedButtonStyles,
    bg: 'transparent',
    color: 'primary',
  },
  defaults: {},
};
