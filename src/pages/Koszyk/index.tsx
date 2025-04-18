"use client";
import { ImageBackground } from "../../components/Layout/Background";
import { FlexLayout } from "../../components/Layout/Flex";
import { products } from "../../constants/productsTESTING";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { Summary } from "./Summary";
import { CartTitle } from "./Title";
import { EmptyCart } from "./Empty";
import { Products } from "./Products";
import { GridLayout } from "../../components/Layout/Grid";

export default function Cart() {
    const cart = useSelector((state: RootState) => state.cart);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    const cartProducts = products.filter((product) =>
        cartItems.some((cart) => cart.id === product.id)
    );

    return (
        <FlexLayout
            maxWidth="1500px"
            direction="column"
            padding="180px 120px"
            margin="0 auto"
            mediaPadding="120px 20px"
            mediaDirection="column"
            minHeight="100vh"
        >
            <ImageBackground />
            {cart.cartTotalQuantity === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <CartTitle cartQuantity={cart.cartTotalQuantity} />
                    <GridLayout columns="2fr 1fr" gap="40px" margin="40px 0">
                        <FlexLayout direction="column" gap="20px">
                            <Products cartProducts={cartProducts} />
                        </FlexLayout>
                        <Summary totalAmount={cart.cartTotalAmount} />
                    </GridLayout>
                </>
            )}
        </FlexLayout>
    );
}
