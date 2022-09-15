import React from 'react';
import { Svg, Defs, Rect, Mask, Circle, Path } from 'react-native-svg';

export function BarCodeMask() {
    return (
        <Svg
            height="100%"
            width="100%"
            style={{ position: 'absolute', zIndex: 99 }}
        >
            <Defs>
                {/* @ts-ignore */}
                <Mask
                    id="mask"
                    x="0"
                    y="0"
                    height="100%"
                    width="100%"
                >
                    <Rect
                        height="100%"
                        width="100%"
                        fill="#fff"
                    />
                    <Rect
                        x="10%"
                        y="40%"
                        height="20%"
                        width="80%"
                        fill="black"
                    />


                </Mask>


            </Defs>
            <Rect
                height="100%"
                width="100%"
                fill="rgba(0,0,0,0.4)"
                mask="url(#mask)"
            />


        </Svg>
    )
}