'use client';

import { theme } from "@/app/core/StyledComponents/theme";
import styled from "styled-components";

interface WrapperProps {
    $columns?: string;
    $rows?: string;
    $gap?: string;
    $columnGap?: string;
    $rowGap?: string;
    $justifyItems?: "start" | "end" | "center" | "stretch";
    $alignItems?: "start" | "end" | "center" | "stretch";
    $justifyContent?: "start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly";
    $alignContent?: "start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly";
    $autoFlow?: "row" | "column" | "row dense" | "column dense";
    $fullWidth?: boolean;
    $fullHeight?: boolean;
    $mediaPadding?: string;
    $padding?: string;
    $margin?: string;
    $maxWidth?: string;
}

export const Wrapper = styled.div<WrapperProps>`
    display: grid;
    grid-template-columns: ${props => props.$columns || "1fr"};
    grid-template-rows: ${props => props.$rows || "auto"};
    gap: ${props => props.$gap || "0"};
    ${props => props.$columnGap && `column-gap: ${props.$columnGap};`}
    ${props => props.$rowGap && `row-gap: ${props.$rowGap};`}
    justify-items: ${props => props.$justifyItems || "stretch"};
    align-items: ${props => props.$alignItems || "stretch"};
    justify-content: ${props => props.$justifyContent || "start"};
    align-content: ${props => props.$alignContent || "start"};
    grid-auto-flow: ${props => props.$autoFlow || "row"};
    width: ${props => props.$fullWidth ? '100%' : 'auto'};
    height: ${props => props.$fullHeight ? '100%' : 'auto'};
    padding: ${props => props.$padding || '0'};
    margin: ${props => props.$margin || '0'};
    max-width: ${props => props.$maxWidth || 'unset'};

    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        gap: 20px;
        grid-template-columns: 1fr;
        padding: ${props => props.$mediaPadding || '0'};
    };
`;