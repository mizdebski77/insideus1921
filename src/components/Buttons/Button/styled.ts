import { theme } from "@/app/core/StyledComponents/theme";
import styled from "styled-components";

export const StyledButton = styled.button<{
    $background?: string;
    $margin?: string;
    $width?: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 1px solid ${theme.palette.mainColor};
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    padding: 12px 64px;
    transition: all 0.3s ease;
    background: ${({ $background }) =>
        $background || theme.palette.mainColor};
    color: ${theme.palette.fontThird};
    position: relative;
    overflow: hidden;

    margin: ${({ $margin }) => $margin || "0"};
    width: ${({ $width }) => $width || "auto"};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: all 0.7s ease;
    }

    &:hover {
        opacity: 0.9;
        &::before {
            left: 100%;
        }
    }

    &:active {
        opacity: 0.6;
    }

    &:disabled {
        opacity: 0.5;
        cursor: no-drop;
        &:hover {
            transform: none;
            &::before {
                display: none;
            }
        }
    }

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 12px 20px;
        font-size: 14px;
    }
`;
