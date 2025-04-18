import styled from "styled-components";
import { theme } from "../../core/StyledComponents/theme";

export const Wrapper = styled.div<{ $hasError?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;

    &:focus-within {
        label {
            color: ${({ $hasError }) =>
        $hasError ? theme.palette.error : theme.palette.mainColor};
        }
    }
`;

export const Label = styled.label<{ $hasError?: boolean }>`
    font-size: 14px;
    color: ${({ $hasError }) =>
        $hasError ? theme.palette.error : theme.palette.fontMain};
    transition: color 0.2s;
`;

export const InputWrapper = styled.div<{ $hasError?: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid
        ${({ $hasError }) =>
        $hasError ? theme.palette.error : theme.palette.mainColor};
    transition: border-color 0.2s;

    &:focus-within {
        border-color: ${({ $hasError }) =>
        $hasError ? theme.palette.error : theme.palette.mainColor};
    }
`;

export const StyledInput = styled.input`
    padding: 8px 10px;
    width: 100%;
    background: none;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: "Kaisei Tokumin", serif;
`;

export const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
    font-size: 18px;
    color: ${theme.palette.mainColor};
    display: flex;
    align-items: center;
`;

export const ErrorText = styled.span`
    color: ${theme.palette.error};
    font-size: 12px;
    margin-top: 4px;
`;
