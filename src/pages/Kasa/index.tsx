"use client";
import { FlexLayout } from "../../components/Layout/Flex";
import { Title } from "../../components/Typography/H1";
import { CheckoutForm } from "./Form";
import { GridLayout } from "../../components/Layout/Grid";
import { Summary } from "./Summary";
import { Permissions } from "./Permisions";
import { Delivery } from "./Delivery";
import { useState } from "react";

export default function Checkout() {
    const [isChecked, setIsChecked] = useState([false, false, false]);
    const [triedSubmit, setTriedSubmit] = useState(false);

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
            <>
                <Title fontSize="40px" fontWeight={400} mediaFontSize="24px">
                    Kasa
                </Title>
                <GridLayout columns="2fr 1fr" gap="40px" margin="40px 0">
                    <FlexLayout
                        direction="column"
                        margin="0 auto"
                        fullWidth
                        gap="24px"
                    >
                        <CheckoutForm />
                        <Delivery />
                        <Permissions
                            isChecked={isChecked}
                            setIsChecked={setIsChecked}
                            triedSubmit={triedSubmit}
                        />
                    </FlexLayout>
                    <Summary
                        onSubmit={() => {
                            const allAccepted = isChecked.every(Boolean);
                            if (!allAccepted) {
                                setTriedSubmit(true);
                                return;
                            }
                        }}
                    />
                </GridLayout>
            </>
        </FlexLayout>
    );
}
