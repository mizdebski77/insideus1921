'use client'
import { theme } from "@/app/core/StyledComponents/theme";
import styled from "styled-components";

export const Wrapper = styled.form<{
    $maxWidth?: string;
    $background?: string;
    $border?: string;
    $padding?: string;
}>`
    max-width: ${props => props.$maxWidth || 'unset'};
    background: ${props => props.$background || 'transparent'};
    border: ${props => props.$border || 'none'};
    padding: ${props => props.$padding || '0'};
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 20px 12px;
    };
`;