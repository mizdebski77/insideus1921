import React, { forwardRef } from "react";
import { Wrapper } from "./styled";

interface FormProps {
    children: React.ReactNode;
    maxWidth?: string;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    background?: string;
    border?: string;
    padding?: string;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
    ({ children, maxWidth, onSubmit, background, border, padding }, ref) => {
        return (
            <Wrapper
                $maxWidth={maxWidth}
                $background={background}
                $border={border}
                $padding={padding}
                onSubmit={onSubmit}
                ref={ref}
            >
                {children}
            </Wrapper>
        );
    }
);

Form.displayName = "Form";
