import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-bottom: 3rem;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 30;
    display: grid;
    gap: 2rem;
    text-align: center;

    @media (min-width: 768px) {
        padding: 4rem;
        gap: 3rem;
        text-align: left;
    }
`;

export const BackgroundVideo = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
