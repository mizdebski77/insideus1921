import { Title } from "../../../components/Typography/H1";
import React from "react";

interface CartTitleProps {
    cartQuantity: number;
}

export const CartTitle: React.FC<CartTitleProps> = ({ cartQuantity }) => {
    return (
        <Title fontSize="40px" mediaFontSize="24px">
            Twój koszyk {cartQuantity === 0 ? "" : `(${cartQuantity})`}
        </Title>
    );
};
