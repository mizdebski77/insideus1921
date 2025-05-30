import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

export const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    border: 1px solid ${theme.palette.mainColor};
    justify-content: space-between;
    align-items: end;
    background: ${theme.palette.thirdColor};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
    };
`;