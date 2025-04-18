import { FlexLayout } from "../../../components/Layout/Flex";
import { ButtonLink } from "../../../components/Links/ButtonLink";
import { Tile } from "../../../components/Tiles/Tile";
import { Paragraph } from "../../../components/Typography/Paragraph";
import React from "react";

interface SummaryProps {
    totalAmount: number;
}

export const Summary: React.FC<SummaryProps> = ({ totalAmount }) => {
    return (
        <div>
            <Tile>
                <Paragraph fontSize="20px" fontWeight={700} margin="0 0 20px 0">
                    Podsumowanie
                </Paragraph>
                <FlexLayout
                    margin="0 0 20px"
                    justify="space-between"
                    align="center"
                >
                    <Paragraph
                        textAlign="center"
                        fontSize="18px"
                        fontWeight={500}
                    >
                        Wartość koszyka:
                    </Paragraph>
                    <strong>{totalAmount.toFixed(2)} zł</strong>
                </FlexLayout>
                <ButtonLink href="/Kasa">Idź do kasy </ButtonLink>
            </Tile>
        </div>
    );
};
