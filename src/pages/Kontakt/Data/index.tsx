import { FlexLayout } from "../../../components/Layout/Flex";
import { Wrapper } from "./styled";
import { Paragraph } from "../../../components/Typography/Paragraph";

export const InsideUsData = () => {
    return (
        <FlexLayout direction="column">
            <Wrapper>
                <Paragraph>Data:</Paragraph>
                <Paragraph opacity={0.7}>Siemanko:</Paragraph>
            </Wrapper>

            <Wrapper>
                <Paragraph>Data:</Paragraph>
                <Paragraph opacity={0.7}>Siemanko:</Paragraph>
            </Wrapper>

            <Wrapper>
                <Paragraph>Data:</Paragraph>
                <Paragraph opacity={0.7}>Siemanko:</Paragraph>
            </Wrapper>
        </FlexLayout>
    );
};
