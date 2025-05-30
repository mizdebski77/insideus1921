import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

export const Wrapper = styled.div<{ $maxWidth?: string }>`
    border: 1px solid ${theme.palette.mainColor};
    padding: 28px;
    max-width: ${({ $maxWidth }) => $maxWidth || 'none'};  
    margin: 0 auto;
    width: 100%;
    background: ${theme.palette.thirdColor};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 12px;
    };
`;
