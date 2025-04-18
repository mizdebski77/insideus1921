import styled from "styled-components";
import { theme } from "../../core/StyledComponents/theme";


interface ScrolledProps {
    $scrolled: boolean;
    $visible?: boolean;
}

export const Wrapper = styled.nav<ScrolledProps>`
    padding: 10px 36px;
    position: fixed;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 28px;
    transition: all 0.3s ease;
    transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(-100%)")};
    background-color: ${({ $scrolled }) => $scrolled ? '#FEF9F5' : 'transparent'};
    box-shadow: ${({ $scrolled }) => $scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};

    @media (max-width: ${theme.breakPoints.mobileMd}px) {
        padding: 20px;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        display: none;
    }
`;

export const IconLinksWrapper = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: ${theme.breakPoints.mobileXl}px) {
        display: none;
    }
`;

export const MobileWrapper = styled.div<ScrolledProps>`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 70%;
    left: 0;
    background: #FFFCF9;
    box-shadow: 26px 0px 44px -30px rgba(66, 68, 90, 1);
    padding: 32px 20px 80px;
    display: flex;
    flex-direction: column;
    gap: 120px;
    backdrop-filter: blur(10px);
    overflow: auto;

    @media (min-width: ${theme.breakPoints.mobileXl}px) {
        display: none;
    };
`;

export const MobileNav = styled.div<ScrolledProps>`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    z-index: 10;

    @media (min-width: ${theme.breakPoints.mobileXl}px) {
        display: none;
    }
`;