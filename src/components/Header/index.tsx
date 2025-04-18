import { StyledHeader, StyledHeaderTitle } from "./styled";
interface headerProps {
    backgroundUrl?: string;
    text?: string;
    fontSize?: string;
    mediaFontSize?: string;
}
export const Header: React.FC<headerProps> = ({
    backgroundUrl,
    text,
    fontSize,
    mediaFontSize,
}) => {
    return (
        <StyledHeader $backgroundUrl={backgroundUrl}>
            <StyledHeaderTitle
                fontSize={fontSize}
                mediaFontSize={mediaFontSize}
            >
                {text}
            </StyledHeaderTitle>
        </StyledHeader>
    );
};
