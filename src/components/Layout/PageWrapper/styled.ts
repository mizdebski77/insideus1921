import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

export const StyledWrapper = styled.section<{ $maxWidth?: string }>`
    max-width: ${props => props.$maxWidth || 'unset'};
    padding: 180px 120px;
    display: grid;
    margin: 0 auto;
    min-height: 100vh;

    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        padding: 120px 40px;
    };

    @media (max-width: ${theme.breakPoints.mobileSm}px) {
        padding: 120px 20px;
    };
`;