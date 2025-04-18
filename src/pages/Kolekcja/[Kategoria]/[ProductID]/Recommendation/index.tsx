"use client";

import React, { useMemo } from "react";
import { FlexLayout } from "../../../../../components/Layout/Flex";
import { Paragraph } from "../../../../../components/Typography/Paragraph";
import { ProductTile } from "../../../../../components/Tiles/ProductTile";
import { products } from "../../../../../constants/productsTESTING";

export const Recommendation = () => {
    const recommendedProducts = useMemo(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    }, []);

    return (
        <FlexLayout direction="column" margin="80px 0" gap="40px">
            <Paragraph
                fontSize="32px"
                textAlign="center"
                mediaFontSize="24px"
                mediaTextAlign="center"
            >
                Inni kupowali też:
            </Paragraph>
            <FlexLayout gap="20px" wrap="wrap" justify="center">
                {recommendedProducts.map(({ id, img, price, title }) => (
                    <ProductTile
                        key={id}
                        to={`/Kolekcja/Marynarki/${id}`}
                        title={title}
                        price={price}
                        url={img}
                        imageAlt={title}
                        maxWidth="200px"
                    />
                ))}
            </FlexLayout>
        </FlexLayout>
    );
};
