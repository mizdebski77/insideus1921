import { FlexLayout } from "../../../components/Layout/Flex";
import React from "react";
import { CartTile } from "../../../components/Tiles/CartTile";

interface Product {
    id: string;
    img: string;
    price: string;
    title: string;
    description?: string;
}

interface ProductsProps {
    cartProducts: Product[];
}

export const Products: React.FC<ProductsProps> = ({ cartProducts }) => {
    return (
        <FlexLayout direction="column" gap="20px">
            {cartProducts.map(({ id, img, price, title }) => (
                <CartTile
                    id={id}
                    key={id}
                    price={price}
                    title={title}
                    imageAlt={title}
                    url={img}
                />
            ))}
        </FlexLayout>
    );
};
