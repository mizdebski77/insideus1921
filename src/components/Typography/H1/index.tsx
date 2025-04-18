import React from "react";
import { StyledH1 } from "./styled"; // Zakładam, że masz styled-components

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    fontSize?: string;
    fontWeight?: string | number; // Możliwość ustawienia dowolnej wartości dla font-weight
    color?: string;
    textAlign?: "left" | "center" | "right" | "justify";
    margin?: string;
    padding?: string;
    lineHeight?: string;
    maxWidth?: string;
    opacity?: number;
    mediaFontSize?: string;
}

export const Title: React.FC<H1Props> = ({
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
    mediaFontSize: MediaFontSize,
    ...props
}) => {
    return (
        <StyledH1
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $color={color}
            $textAlign={textAlign}
            $margin={margin}
            $padding={padding}
            $lineHeight={lineHeight}
            $maxWidth={maxWidth}
            $opacity={opacity}
            $mediaFontSize={MediaFontSize}
            {...props}
        >
            {children}
        </StyledH1>
    );
};
