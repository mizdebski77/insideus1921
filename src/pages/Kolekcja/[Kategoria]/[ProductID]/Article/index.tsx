import { GridLayout } from "../../../../../components/Layout/Grid";
import { Title } from "../../../../../components/Typography/H1";
import { Paragraph } from "../../../../../components/Typography/Paragraph";
import { Buttons } from "./Buttons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/features/cartSlice";
import { addToFav } from "../../../../../redux/features/favSlice";
import { toast } from "react-toastify";

interface ProductInterface {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
}

export const Article = ({
    productId,
    title,
    price,
    description,
}: {
    productId: string;
    title: string;
    price: string;
    description: string;
}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const product: ProductInterface = {
            id: productId,
            name: title,
            price: parseFloat(price),
            description,
            image: "",
            category: "",
        };
        dispatch(addToCart(product));
        toast.success("Dodano do koszyka", {
            position: "top-center",
        });
    };

    const handleAddToFav = () => {
        const product: ProductInterface = {
            id: productId,
            name: title,
            price: parseFloat(price),
            description,
            image: "",
            category: "",
        };
        dispatch(addToFav(product));
        toast.success("Produkt dodano do ulubionych.", {
            position: "top-center",
        });
    };
    return (
        <GridLayout gap="24px">
            <Title
                textAlign="center"
                fontSize="32px"
                fontWeight="normal"
                mediaFontSize="24px"
            >
                {title}
            </Title>

            <Paragraph
                fontSize="24px"
                opacity={0.6}
                textAlign="center"
                mediaFontSize="20px"
                mediaTextAlign="center"
            >
                {price} zł
            </Paragraph>

            <Paragraph
                fontSize="18px"
                mediaFontSize="16px"
                mediaTextAlign="center"
            >
                {description}
            </Paragraph>

            <Buttons
                onAddToCart={handleAddToCart}
                onAddToFav={handleAddToFav}
            />
        </GridLayout>
    );
};
