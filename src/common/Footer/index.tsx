import { FlexLayout } from "../../components/Layout/Flex";
import { IconLink } from "../../components/Links/IconLink";
import { LogoLink } from "../../components/Links/Logo";
import { TextLink } from "../../components/Links/TextLink";
import { NavLinks } from "../../constants/NavLinks";
import { SocialMedia } from "../../constants/SocialMedia";
import { Wrapper } from "./styled";


export default function Footer() {
    return (
        <Wrapper>
            <FlexLayout
                gap="24px"
                wrap="wrap"
                maxWidth="480px"
                align="center"
                justify="center"
                margin="0 auto"
            >
                {NavLinks.map(({ id, text, link }) => (
                    <TextLink href={link} key={id} colorVariant="second">
                        {text}
                    </TextLink>
                ))}
            </FlexLayout>

            <LogoLink fontSize="80px" />

            <FlexLayout gap="32px" justify="center">
                {SocialMedia.map(({ id, icon: IconComponent, text, href }) => (
                    <IconLink
                        colorVariant="second"
                        key={id}
                        text={text}
                        href={href}
                        icon={<IconComponent size={34} />}
                    />
                ))}
            </FlexLayout>
        </Wrapper>
    );
}
