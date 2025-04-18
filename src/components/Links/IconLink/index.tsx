"use client";
import { useEffect, useState } from "react";
import { Wrapper, Span, Quantity } from "./styled";

interface IconLinkProps {
    text: string;
    href: string;
    icon: React.ReactNode;
    colorVariant?: "main" | "second";
    quantity?: number; // Make quantity optional
}

export const IconLink: React.FC<IconLinkProps> = ({
    text,
    href,
    icon,
    colorVariant = "main",
    quantity,
}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Wrapper href={href} $colorVariant={colorVariant}>
            {icon}
            <Span>{text}</Span>
            {isClient && typeof quantity === "number" && quantity > 0 && (
                <Quantity>{quantity > 9 ? "9+" : quantity}</Quantity>
            )}
        </Wrapper>
    );
};
