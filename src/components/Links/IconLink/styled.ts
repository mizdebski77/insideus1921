'use client'
import { theme } from "@/app/core/StyledComponents/theme";
import Link from "next/link";
import styled from "styled-components";
interface WrapperProps {
    $colorVariant?: "main" | "second";
}

export const Wrapper = styled(Link) <WrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${theme.palette.fontMain};
    text-decoration: none;
    background-image: linear-gradient(
        to right,
        ${theme.palette.mainColor},
        ${theme.palette.mainColor} 50%,
        ${({ $colorVariant }) =>
        $colorVariant === "second"
            ? theme.palette.fontMain
            : theme.palette.fontThird}
            50%
    );
    position: relative;
    background-size: 200% 100%;
    background-position: -100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    color: ${({ $colorVariant }) =>
        $colorVariant === "second"
            ? theme.palette.fontMain
            : theme.palette.fontThird};

    &:before {
        content: "";
        background: ${theme.palette.mainColor};
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        background-position: 0;
        color: ${theme.palette.mainColor};
    }

    &:hover:before {
        width: 100%;
    }
`;

export const Span = styled.span`
    font-size: 14px;
`;

export const Quantity = styled.span`
    position: absolute;
    top: -5px;
    right: -5px;
    background: ${theme.palette.secondaryColor};
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
    -webkit-text-fill-color: initial; 
`;
