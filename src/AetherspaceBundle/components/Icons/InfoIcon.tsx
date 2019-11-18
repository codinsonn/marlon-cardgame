import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

// @ts-ignore
// const { Path, Rect } = Svg;

const InfoIcon = () => (
    <Svg width="24" height="24">
        <Rect width="24" height="24" fill="none" rx="0" ry="0" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22C6.49 22 2 17.51 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9ZM12 10C11.45 10 11 10.45 11 11V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V11C13 10.45 12.55 10 12 10Z"
            fill="#87CFFA"
        />
    </Svg>
);

export default InfoIcon;
