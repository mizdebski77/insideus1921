import styled from "styled-components";
import { theme } from "../../core/StyledComponents/theme";

interface headerProps {
    $backgroundUrl?: string;
    text?: string;
    fontSize?: string;
    mediaFontSize?: string;
}
export const StyledHeader = styled.header<headerProps>`
    width: 100%;
    height: 540px;
    background-image: ${({ $backgroundUrl }) => `url(${$backgroundUrl})`};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 11px 13px 28px 0px rgba(0, 0, 0, 0.50);

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        height: 400px;
    };
`;

export const StyledHeaderTitle = styled.h1<headerProps>`
    position: absolute;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '100px')};
    color: white;
    text-align: center;
    padding: 0 12px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: ${({ mediaFontSize }) => (mediaFontSize ? mediaFontSize : '40px')};
        text-align: center;
    };
`;
