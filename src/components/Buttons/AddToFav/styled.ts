import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

export const Wrapper = styled.button`
    background: none;
    display: grid;
    border: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
`;

export const IconWrapper = styled.div`
    transition: transform 0.3s;

    ${Wrapper}:hover & {
        transform: translateY(-4px);
    }
`;

export const Span = styled.span`
    font-size: 16px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 14px;
    };
`;
