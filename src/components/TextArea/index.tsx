"use client";
import { StyledTextarea, Wrapper, ErrorText, Label } from "./styled";

interface TextareaProps {
    placeholder?: string;
    label?: string;
    name: string;
    register: any;
    error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
    placeholder,
    label,
    name,
    register,
    error,
}) => {
    const hasError = !!error;

    return (
        <Wrapper $hasError={hasError}>
            {label && (
                <Label $hasError={hasError} htmlFor={name}>
                    {label}
                </Label>
            )}
            <StyledTextarea
                name={name}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && <ErrorText>{error}</ErrorText>}
        </Wrapper>
    );
};
