'use client'
import { theme } from "@/app/core/StyledComponents/theme";
import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 180px 120px;
    gap: 80px;
    
    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        padding: 80px;
    };

    @media (max-width: ${theme.breakPoints.mobileSm}px) {
        padding: 20px;
        gap: 20px;
    };
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media (max-width: ${theme.breakPoints.mobileSm}px) {
        grid-template-columns: 1fr;
    };
`;