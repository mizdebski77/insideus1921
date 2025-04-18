'use client'
import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 12px;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
        transform: scale(1.02);
    };
`;
