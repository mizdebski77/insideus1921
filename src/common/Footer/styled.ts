import styled from "styled-components";
import { theme } from "../../core/StyledComponents/theme";

export const Wrapper = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 120px 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    gap: 24px;
    width: 95%;

    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        grid-template-columns: 1fr;
        gap: 80px;
        padding: 80px 20px;
    };
`;