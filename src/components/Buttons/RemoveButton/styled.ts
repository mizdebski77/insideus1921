import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

export const Button = styled.button`
    border: none;
    background: none;
    color: ${theme.palette.secondaryColor};
    opacity: 0.6;
    cursor: pointer; 
    font-size: 28px;
    transition: 0.3s;

    &:hover {
        transform: translateY(-4px);
    }

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: 24px;
        margin-top: 20px;
    };
`;