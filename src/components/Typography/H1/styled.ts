import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

export const StyledH1 = styled.h1<{
    $fontSize?: string;
    $fontWeight?: string | number;
    $color?: string;
    $textAlign?: string;
    $margin?: string;
    $padding?: string;
    $lineHeight?: string;
    $maxWidth?: string;
    $opacity?: number;
    $mediaFontSize?: string;
}>`
    font-size: ${({ $fontSize }) => $fontSize || "2rem"};
    font-weight: ${({ $fontWeight }) => $fontWeight || "bold"};  
    color: ${({ $color }) => $color || "black"};
    text-align: ${({ $textAlign }) => $textAlign || "left"};
    margin: ${({ $margin }) => $margin || "0"};
    padding: ${({ $padding }) => $padding || "0"};
    line-height: ${({ $lineHeight }) => $lineHeight || "1.2"};
    max-width: ${({ $maxWidth }) => $maxWidth || "none"};
    opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: ${({ $mediaFontSize }) => $mediaFontSize || "unset"};
        text-align: center;
    };
    
`;
