import React, {useRef} from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
  containerProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
  boxProps,
  containerProps,
  ...rest
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
    flexDirection: 'row',
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Box flexGrow={1} flexShrink={1} {...boxProps}>
      <Pressable onPress={focusInput}>
        {label && (
          <Text preset="paragraphMedium" mb="s4">
            {label}
          </Text>
        )}
        <Box {...$textInputContainer} {...containerProps} backgroundColor="grayWhite">
          {LeftComponent && (
            <Box mr="s16" justifyContent="center">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            style={$textInputStyle}
            placeholderTextColor={colors.gray2}
            {...rest}
          />
          {RightComponent && (
            <Box ml="s16" justifyContent="center">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  borderWidth: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};