'use client'
import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0;
    right: 0;
    width: 60vw; 
    height: 60vh; 
    margin: auto;
    z-index: -10;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.03;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
`;
