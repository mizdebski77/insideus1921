import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MobileNav, MobileWrapper } from "../styled";
import Hamburger from "hamburger-react";
import { FlexLayout } from "../../../components/Layout/Flex";
import { NavLinks } from "../../../constants/NavLinks";
import { TextLink } from "../../../components/Links/TextLink";
import { IconNavLinks } from "../../../constants/IconLinks";
import { IconLink } from "../../../components/Links/IconLink";

interface MobileNavbarProps {
    scrolled: boolean;
}

export default function MobileNavbar({ scrolled }: MobileNavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const animation = {
        visible: {
            x: 0,
            opacity: 1,
            transition: { x: { velocity: 100 }, duration: 0.3 },
        },
        hidden: {
            x: "-100%",
            opacity: 0,
            transition: { x: { velocity: 100 }, duration: 0.3 },
        },
    };

    return (
        <>
            <MobileNav onClick={toggleMenu} $scrolled={scrolled}>
                <Hamburger
                    color={scrolled ? "#000" : "#e4dfdf"}
                    size={24}
                    toggled={isOpen}
                />
            </MobileNav>

            <AnimatePresence>
                {isOpen && (
                    <MobileWrapper
                        as={motion.div}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={animation}
                        $scrolled={scrolled}
                    >
                        <FlexLayout direction="column" gap="28px">
                            {NavLinks.map(({ id, text, link }) => (
                                <TextLink
                                    colorVariant="second"
                                    key={id}
                                    href={link}
                                >
                                    {text}
                                </TextLink>
                            ))}
                        </FlexLayout>
                        <FlexLayout gap="32px" wrap="wrap" justify="center">
                            {IconNavLinks.map(
                                ({ id, icon: IconComponent, text, href }) => (
                                    <IconLink
                                        colorVariant="second"
                                        key={id}
                                        text={text}
                                        href={href}
                                        icon={<IconComponent size={34} />}
                                    />
                                )
                            )}
                        </FlexLayout>
                    </MobileWrapper>
                )}
            </AnimatePresence>
        </>
    );
}
