import React from 'react';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Text } from '../Text/Text';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'disabled';

interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
    disabled?: boolean;
};

export function Button({ title, loading, preset = 'primary', disabled,...touchableOpacityBoxProps }: ButtonProps) {
    const buttonPreset = buttonPresets[preset][disabled ? 'disabled': 'default'];
    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...touchableOpacityBoxProps}
            {...buttonPreset.container}
            >
            {loading ? (
                <ActivityIndicator color={buttonPreset.content} />
            ) : (
                <Text preset="paragraphMedium" bold color={buttonPreset.content}>
                    {title}
                </Text>
            )}
        </TouchableOpacityBox>
    );
};