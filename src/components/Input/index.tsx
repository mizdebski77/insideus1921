"use client";
import { useState } from "react";
import {
    StyledInput,
    Wrapper,
    ToggleButton,
    ErrorText,
    InputWrapper,
    Label,
} from "./styled";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
interface InputProps {
    type?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    name: string;
    register: any;
    value?: string; // Added value prop
    hasError?: boolean; // Optionally include hasError if needed
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Added onChange prop
}

export const Input: React.FC<InputProps> = ({
    type = "text",
    placeholder,
    label,
    error,
    name,
    register,
    value,
    hasError,
    onChange,
}) => {
    const [inputType, setInputType] = useState(type);

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    return (
        <Wrapper $hasError={hasError}>
            {label && (
                <Label $hasError={hasError} htmlFor={name}>
                    {label}
                </Label>
            )}
            <InputWrapper $hasError={hasError}>
                <StyledInput
                    id={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value} // Use value prop directly
                    onChange={onChange} // Use onChange passed as prop
                    {...register(name)}
                />
                {type === "password" && (
                    <ToggleButton
                        type="button"
                        onClick={togglePasswordVisibility}
                        aria-label={
                            inputType === "password"
                                ? "Show password"
                                : "Hide password"
                        }
                    >
                        {inputType === "password" ? (
                            <IoEyeOutline />
                        ) : (
                            <FaRegEyeSlash />
                        )}
                    </ToggleButton>
                )}
            </InputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </Wrapper>
    );
};
