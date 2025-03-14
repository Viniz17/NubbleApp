import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconBase } from '../../components/Icon/Icon';

export function ChevronRightIcon({ size = 20, color = 'black' }: IconBase) {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill={color}>
            <Path d="M7 4L14 10L7 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}