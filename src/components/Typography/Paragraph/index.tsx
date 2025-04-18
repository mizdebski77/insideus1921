"use client";

import React from "react";
import { StyledParagraph } from "./styled";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    fontSize?: string;
    fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
    color?: string;
    textAlign?: "left" | "center" | "right" | "justify";
    margin?: string;
    padding?: string;
    lineHeight?: string;
    maxWidth?: string;
    opacity?: number;
    mediaFontSize?: string;
    mediaTextAlign?: "left" | "center" | "right" | "justify"; // <-- tutaj
}

export const Paragraph: React.FC<ParagraphProps> = ({
    children,
    fontSize,
    fontWeight,
    color,
    textAlign,
    margin,
    padding,
    lineHeight,
    maxWidth,
    opacity,
    mediaFontSize,
    mediaTextAlign, // <-- tutaj
    ...props
}) => {
    return (
        <StyledParagraph
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $color={color}
            $textAlign={textAlign}
            $margin={margin}
            $padding={padding}
            $lineHeight={lineHeight}
            $maxWidth={maxWidth}
            $opacity={opacity}
            $mediaFontSize={mediaFontSize}
            $mediaTextAlign={mediaTextAlign} // <-- tutaj
            {...props}
        >
            {children}
        </StyledParagraph>
    );
};
