'use client';

import styled from "styled-components";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    $width?: string;
    $height?: string;
    $borderRadius?: string;
    $objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    $opacity?: number;
    $maxWidth?: string;
    $maxHeight?: string;
    $mediaMaxHeight?: string;
}

export const StyledImage = styled.img<ImageProps>`
    width: ${({ $width }) => $width || "auto"};
    height: ${({ $height }) => $height || "auto"};
    border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
    object-fit: ${({ $objectFit }) => $objectFit || "cover"};
    opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};
    max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
    max-height: ${({ $maxHeight }) => $maxHeight || "100%"};

    @media (max-width: 768px) {
        max-height: ${({ $mediaMaxHeight }) => $mediaMaxHeight || "unset"}; 
    }
`;
