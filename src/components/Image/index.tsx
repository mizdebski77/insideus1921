"use client";
import React from "react";
import { StyledImage } from "./styled";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: string;
    height?: string;
    borderRadius?: string;
    objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    opacity?: number;
    maxWidth?: string;
    maxHeight?: string;
    mediaMaxHeight?: string; // <-- tutaj
}

export const Image: React.FC<ImageProps> = ({
    width,
    height,
    borderRadius,
    objectFit,
    opacity,
    maxWidth,
    maxHeight,
    mediaMaxHeight, // <-- tutaj
    ...props
}) => {
    return (
        <StyledImage
            $width={width}
            $height={height}
            $borderRadius={borderRadius}
            $objectFit={objectFit}
            $opacity={opacity}
            $maxWidth={maxWidth}
            $maxHeight={maxHeight}
            $mediaMaxHeight={mediaMaxHeight} // <-- tutaj
            {...props}
        />
    );
};
