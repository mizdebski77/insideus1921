import { StyledButton } from "./styled";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    $background?: string;
    margin?: string;
    width?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
    disabled = false,
    onClick,
    $background,
    margin,
    width,
}) => {
    return (
        <StyledButton
            type={type}
            disabled={disabled}
            onClick={onClick}
            $background={$background}
            $margin={margin}
            $width={width}
        >
            {children}
        </StyledButton>
    );
};
