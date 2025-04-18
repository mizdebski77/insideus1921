"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { NavLinks } from "@/app/constants/NavLinks";
import { IconNavLinks } from "@/app/constants/IconLinks";
import { IconLink } from "@/app/components/Links/IconLink";
import { LogoLink } from "@/app/components/Links/Logo";
import MobileNavbar from "./MobileNav";
import { Wrapper, LinksWrapper, IconLinksWrapper } from "./styled";
import { TextLink } from "@/app/components/Links/TextLink";

export default function Navigation() {
    const pathname = usePathname();
    const state = useSelector((state: RootState) => state);
    const cartQuantity = state.cart.cartTotalQuantity;
    const favQuantity = state.fav.favTotalQuantity;

    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (pathname === "/" && currentScrollY <= 20) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <Wrapper $scrolled={scrolled} $visible={showNav}>
            <LogoLink
                colorVariant={scrolled ? "second" : "main"}
                mediaFontSize="28px"
            />

            <LinksWrapper>
                {NavLinks.map(({ id, text, link }) => (
                    <TextLink
                        href={link}
                        key={id}
                        colorVariant={scrolled ? "second" : "main"}
                    >
                        {text}
                    </TextLink>
                ))}
            </LinksWrapper>

            <IconLinksWrapper>
                {IconNavLinks.map(({ id, icon: IconComponent, text, href }) => (
                    <IconLink
                        key={id}
                        text={text}
                        href={href}
                        icon={<IconComponent size={34} />}
                        colorVariant={scrolled ? "second" : "main"}
                        quantity={
                            text === "Koszyk"
                                ? cartQuantity
                                : text === "Ulubione"
                                ? favQuantity
                                : undefined
                        }
                    />
                ))}
            </IconLinksWrapper>

            <MobileNavbar scrolled={scrolled} />
        </Wrapper>
    );
}
