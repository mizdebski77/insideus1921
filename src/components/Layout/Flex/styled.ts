import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

interface WrapperProps {
    $direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    $align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    $gap?: string;
    $fullWidth?: boolean;
    $fullHeight?: boolean;
    $padding?: string;
    $margin?: string;
    $maxWidth?: string;
    $mediaPadding?: string;
    $mediaDirection?: string;
    $border?: string;
    $borderBottom?: string;
    $maxHeight?: string;
    $minHeight?: string;
    $mediaJustify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    $mediaAlign?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'; // <-- dodane
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: ${props => props.$direction || 'row'};
    justify-content: ${props => props.$justify || 'flex-start'};
    align-items: ${props => props.$align || 'stretch'};
    flex-wrap: ${props => props.$wrap || 'nowrap'};
    gap: ${props => props.$gap || '0'};
    width: ${props => props.$fullWidth ? '100%' : 'auto'};
    height: ${props => props.$fullHeight ? '100%' : 'auto'};
    padding: ${props => props.$padding || '0'};
    margin: ${props => props.$margin || '0'};
    max-width: ${props => props.$maxWidth || 'unset'};
    max-height: ${props => props.$maxHeight || 'unset'};
    min-height: ${props => props.$minHeight || 'unset'};
    border: ${props => props.$border || 'none'};
    ${props => props.$borderBottom !== undefined && `border-bottom: ${props.$borderBottom};`}

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: ${props => props.$mediaPadding || '0'};
        flex-direction: ${props => props.$mediaDirection ? props.$mediaDirection : props.$direction || 'row'};
        justify-content: ${props => props.$mediaJustify || props.$justify || 'flex-start'}; 
        align-items: ${props => props.$mediaAlign || props.$align || 'stretch'};
    }
`;
