'use client';
import { theme } from "@/app/core/StyledComponents/theme";
import Link from "next/link";
import styled from "styled-components";

interface StyledNavLinkProps {
    $colorVariant?: "main" | "second";
}

export const StyledNavLink = styled(Link) <StyledNavLinkProps>`
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
    background-size: 200% 100%;
    background-position: -100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    color: white;

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