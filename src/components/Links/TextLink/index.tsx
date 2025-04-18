
import { StyledNavLink } from "./styled";


interface TextLinkProps {
    children: React.ReactNode;
    href: string;
    colorVariant?: "main" | "second";
}

export const TextLink: React.FC<TextLinkProps> = ({
    children,
    href,
    colorVariant = "main",
}) => {
    return (
        <StyledNavLink to={href} $colorVariant={colorVariant}>
            {children}
        </StyledNavLink>
    );
};
