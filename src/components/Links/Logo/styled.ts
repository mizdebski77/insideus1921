import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

type WrapperProps = {
    $fontSize?: string;
    $mediaFontSize?: string;
    $colorVariant?: "main" | "second";
};

export const Wrapper = styled(Link) <WrapperProps>`
    font-size: ${({ $fontSize }) => $fontSize || "40px"};
    text-decoration: none;
    color: ${({ $colorVariant }) =>
        $colorVariant === "main" ? theme.palette.fontThird : theme.palette.fontSecond};
    break-before: avoid;
    display: grid;
    letter-spacing: 2px;
    justify-content: center;
    text-align: center;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        font-size: ${({ $mediaFontSize }) => $mediaFontSize || "40px"};
    };
`;

export const Span = styled.span`
    font-size: 0.8rem;
    text-align: center;
`;