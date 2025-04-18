'use client';
import { theme } from "@/app/core/StyledComponents/theme";
import bg from "../../assets/parallax.png";

import styled from "styled-components";

export const ParallaxWrapper = styled.div`
    position: relative;
    height: 600px;
    
    overflow: hidden;
`;

export const ParallaxContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg.src});
    box-shadow: inset 8px 8px 400px 131px rgba(0, 0, 0, 1);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        box-shadow: inset 8px 8px 200px 81px rgba(0, 0, 0, 1);
    };
`;