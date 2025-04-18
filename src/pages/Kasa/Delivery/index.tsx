"use client";

import { FlexLayout } from "../../../components/Layout/Flex";
import DeliveryTile from "../../../components/Tiles/DeliveryTile";
import { Paragraph } from "../../../components/Typography/Paragraph";
import { DeliveryOptions } from "../../../constants/delivery";
import { Input } from "../../../components/Input";
import { ButtonLink } from "../../../components/Links/ButtonLink";
import { useDispatch, useSelector } from "react-redux";
import {
    setLockerNumber,
    setSelectedDelivery,
} from "../../../redux/features/deliverySlice";
import { RootState } from "../../../redux/store";

export const Delivery = () => {
    const dispatch = useDispatch();
    const { selectedId, lockerNumber } = useSelector(
        (state: RootState) => state.delivery
    );

    const handleSelect = (id: string) => {
        dispatch(setSelectedDelivery(id));
    };

    const handleChangeLocker = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLockerNumber(e.target.value));
    };

    return (
        <FlexLayout
            justify="center"
            gap="16px"
            direction="column"
            padding="20px"
        >
            <Paragraph
                fontSize="24px"
                fontWeight={700}
                mediaFontSize="18px"
                mediaTextAlign="center"
            >
                Sposób dostawy:
            </Paragraph>
            <FlexLayout
                justify="space-between"
                mediaDirection="column"
                gap="20px"
                mediaJustify="center"
                mediaAlign="center"
            >
                {DeliveryOptions.map(({ id, text, price, icon }) => (
                    <DeliveryTile
                        key={id}
                        selected={selectedId === id.toString()}
                        logo={icon}
                        description={text}
                        price={price.toString()}
                        onClick={() => handleSelect(id.toString())}
                    />
                ))}
            </FlexLayout>

            {selectedId && selectedId.includes("3") && (
                <FlexLayout margin="20px 0 " direction="column" gap="20px">
                    <Paragraph fontSize="16px" fontWeight={600}>
                        Proszę wpisać numer paczkomatu:
                    </Paragraph>
                    <Input
                        name="lockerNumber"
                        register={() => {}}
                        value={lockerNumber}
                        onChange={handleChangeLocker}
                        placeholder="Numer paczkomatu (np: WAW378M)"
                    />

                    <ButtonLink
                        href="https://geowidget.inpost.pl/"
                        target="_blank"
                    >
                        Znajdź paczkomat
                    </ButtonLink>
                </FlexLayout>
            )}
        </FlexLayout>
    );
};
