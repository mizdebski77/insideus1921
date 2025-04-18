import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    $fontSize?: string;
    $fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
    $color?: string;
    $textAlign?: "left" | "center" | "right" | "justify";
    $margin?: string;
    $padding?: string;
    $lineHeight?: string;
    $maxWidth?: string;
    $opacity?: number;
    $mediaFontSize?: string;
    $mediaTextAlign?: "left" | "center" | "right" | "justify"; // <-- tutaj
}

export const StyledParagraph = styled.p<ParagraphProps>`
    font-size: ${({ $fontSize }) => $fontSize || "16px"};
    font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
    color: ${({ $color }) => $color || theme.palette.fontMain};
    text-align: ${({ $textAlign }) => $textAlign || "left"};
    margin: ${({ $margin }) => $margin || "0"};
    padding: ${({ $padding }) => $padding || "0"};
    line-height: ${({ $lineHeight }) => $lineHeight || "1.5"};
    max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
    opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: ${({ $mediaFontSize }) => $mediaFontSize || "unset"};
        text-align: ${({ $mediaTextAlign }) => $mediaTextAlign || "inherit"}; // <-- tutaj
    }
`;
