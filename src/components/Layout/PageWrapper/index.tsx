import React from "react";
import { StyledWrapper } from "./styled";

interface WrapperProps {
    children: React.ReactNode;
    maxWidth?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, maxWidth }) => {
    return <StyledWrapper $maxWidth={maxWidth}>{children}</StyledWrapper>;
};
