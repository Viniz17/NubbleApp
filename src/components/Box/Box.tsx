import {createBox, BoxProps as RNBoxProps, createRestyleComponent, backgroundColor, BackgroundColorProps, spacing, SpacingProps, layout, LayoutProps, border, BorderProps, spacingShorthand, SpacingShorthandProps} from '@shopify/restyle';
import {TouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps} from 'react-native';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();

export type BoxProps = RNBoxProps<Theme>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> & SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & SpacingShorthandProps<Theme> & RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([backgroundColor, spacing, layout, border, spacingShorthand], TouchableOpacity);