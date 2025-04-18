import { StyledButtonLink } from "./styled";

interface ButtonProps {
    children: React.ReactNode;
    $background?: string;
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

export const ButtonLink: React.FC<ButtonProps> = ({
    children,
    $background,
    href,
    target = "_self",
}) => {
    return (
        <StyledButtonLink href={href} $background={$background} target={target}>
            {children}
        </StyledButtonLink>
    );
};
