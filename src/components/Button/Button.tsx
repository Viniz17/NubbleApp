import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text/Text';
import { Theme } from '../../theme/theme';
import { useTheme } from '@shopify/restyle';
import { Box } from '../Box/Box';

interface ButtonProps {
    title: string;
    loading?: boolean;
}

export function Button({ title, loading }: ButtonProps) {
    return (
        <Box
            backgroundColor="buttonPrimary"
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center">
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text preset="paragraphMedium" bold style={{ color: '#FFF' }}>
                    {title}
                </Text>
            )}
        </Box>
    );
}