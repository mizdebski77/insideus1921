import styled from "styled-components";
import { theme } from "../../../../../core/StyledComponents/theme";

export const MainImage = styled.div`
    flex: 3;
    max-width: 800px;
    margin: 0 auto;
    justify-content: center;

    img {
        width: 100%;
        height: auto;
    }

`;

export const Thumbnails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 120px;

    img {
        width: 100%;
        height: auto;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;

        &:hover,
        &.active {
            opacity: 1;
        }
    }


    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        flex-direction: row;
        max-width: 40px;
        margin: 0 ;
    };
`;