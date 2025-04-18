import { GridLayout } from "../../../components/Layout/Grid";
import { ButtonLink } from "../../../components/Links/ButtonLink";
import { Paragraph } from "../../../components/Typography/Paragraph";

export const EmptyCart = () => {
    return (
        <GridLayout
            alignItems="center"
            justifyContent="center"
            margin="0 auto"
            gap="20px"
        >
            <Paragraph textAlign="center" fontSize="40px">
                Twój koszyk jest pusty
            </Paragraph>
            <ButtonLink href="/">Zacznij kupować</ButtonLink>
        </GridLayout>
    );
};
