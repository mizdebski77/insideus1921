import { Span, Wrapper } from "./styled";

interface LogoLinkProps {
    fontSize?: string;
    colorVariant?: "main" | "second";
    mediaFontSize?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({
    fontSize,
    colorVariant,
    mediaFontSize,
}) => {
    return (
        <Wrapper
            to="/"
            $fontSize={fontSize}
            $colorVariant={colorVariant}
            $mediaFontSize={mediaFontSize}
        >
            1926
            <Span>INSIDE US</Span>
        </Wrapper>
    );
};
