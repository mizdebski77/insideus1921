import { Button } from "../../../components/Buttons/Button";
import { Image } from "../../../components/Image";
import { FlexLayout } from "../../../components/Layout/Flex";
import { Tile } from "../../../components/Tiles/Tile";
import { Paragraph } from "../../../components/Typography/Paragraph";
import { products } from "../../../constants/productsTESTING";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

type Props = {
    onSubmit: () => void;
};

export const Summary = ({ onSubmit }: Props) => {
    const cart = useSelector((state: RootState) => state.cart);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const deliveryCosts = useSelector(
        (state: RootState) => state.delivery.deliveryCost
    );
    const cartProducts = products.filter((product) =>
        cartItems.some((cart) => cart.id === product.id)
    );

    console.log(deliveryCosts);

    return (
        <div>
            <Tile>
                <Paragraph
                    fontSize="24px"
                    fontWeight={700}
                    margin="0 0 20px 0"
                    mediaTextAlign="center"
                    mediaFontSize="18px"
                >
                    Podsumowanie zamówienia
                </Paragraph>
                <FlexLayout direction="column" gap="20px">
                    {cartProducts.map(({ id, img, price, title }) => (
                        <FlexLayout
                            key={id}
                            justify="space-between"
                            border=""
                            padding="12px 0"
                            align="center"
                            fullWidth
                            borderBottom="1px solid #87774E"
                            mediaPadding="12px 20px"
                        >
                            <Image src={img} maxWidth="40px" alt="image" />
                            <Paragraph
                                fontSize="14px"
                                fontWeight={700}
                                mediaFontSize="14px"
                            >
                                {title}
                            </Paragraph>
                            <Paragraph
                                fontSize="14px"
                                fontWeight={400}
                                mediaFontSize="12px"
                            >
                                {price} zł
                            </Paragraph>
                        </FlexLayout>
                    ))}
                </FlexLayout>
                <FlexLayout
                    margin="20px 0 4px"
                    justify="space-between"
                    align="center"
                >
                    <Paragraph
                        textAlign="center"
                        fontSize="18px"
                        fontWeight={400}
                    >
                        Wartość koszyka:
                    </Paragraph>
                    <p>{cart.cartTotalAmount.toFixed(2)} zł</p>
                </FlexLayout>

                <FlexLayout
                    padding="0 0 12px"
                    margin="0 0 20px"
                    justify="space-between"
                    align="center"
                    borderBottom="1px solid #87774E"
                    mediaPadding="0 0 8px"
                >
                    <Paragraph
                        textAlign="center"
                        fontSize="18px"
                        fontWeight={400}
                    >
                        Koszt dostawy:
                    </Paragraph>
                    <p>{deliveryCosts.toFixed(2)} zł</p>
                </FlexLayout>

                <FlexLayout
                    padding="0 0 12px"
                    margin="0 0 20px"
                    justify="space-between"
                    align="center"
                    borderBottom="1px solid #87774E"
                    mediaPadding="0 0 8px"
                >
                    <Paragraph textAlign="center" fontWeight={700}>
                        Całość:
                    </Paragraph>
                    <strong>
                        {(cart.cartTotalAmount + deliveryCosts).toFixed(2)} zł
                    </strong>
                </FlexLayout>
                <Button width="100%" onClick={onSubmit}>
                    Zamawiam i płacę
                </Button>
            </Tile>
        </div>
    );
};
