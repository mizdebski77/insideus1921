"use client";
import { removeFromCart } from "../../../redux/features/cartSlice";
import { RemoveButton } from "../../Buttons/RemoveButton";
import { Image } from "../../Image";
import { FlexLayout } from "../../Layout/Flex";
import { GridLayout } from "../../Layout/Grid";
import { Paragraph } from "../../Typography/Paragraph";
import { Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface ProductTileWrapper {
    id: string;
    title: string;
    price: string;
    url: string;
    imageAlt: string;
}

export const CartTile: React.FC<ProductTileWrapper> = ({
    id,
    title,
    price,
    url,
    imageAlt,
}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart({ id }));
        toast.success("Produkt pomyślnie usunięty z koszyka.", {
            position: "top-center",
        });
    };

    return (
        <Wrapper>
            <FlexLayout gap="24px" mediaDirection="column">
                <Image
                    src={url}
                    alt={imageAlt}
                    maxHeight="120px"
                    height="100%"
                    mediaMaxHeight="300px"
                />
                <GridLayout>
                    <Paragraph
                        fontSize="20px"
                        fontWeight={700}
                        mediaTextAlign="center"
                    >
                        {title}
                    </Paragraph>
                    <Paragraph
                        fontSize="16px"
                        opacity={0.6}
                        mediaTextAlign="center"
                    >
                        {price} zł
                    </Paragraph>
                </GridLayout>
            </FlexLayout>

            <div>
                <RemoveButton onClick={handleRemove} />
            </div>
        </Wrapper>
    );
};
