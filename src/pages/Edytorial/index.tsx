import { Image } from "../../components/Image";
import { GridLayout } from "../../components/Layout/Grid";
import { Wrapper } from "../../components/Layout/PageWrapper";
import { Article } from "./Article";
import bg1 from "../../assets/parallax.png";
import bg2 from "../../assets/plaszcze.png";
import bg3 from "../../assets/sth.png";

export default function Edytorial() {
    return (
        <Wrapper>
            <GridLayout
                padding="20px 40px"
                columns="1fr 2fr"
                maxWidth="1920px"
                margin="0 auto"
                gap="20px"
                mediaPadding="20px"
            >
                <Image  alt="image"src={bg1} maxHeight="100%" />

                <GridLayout gap="20px">
                    <Image  alt="image"src={bg3} maxHeight="600px" />

                    <Image  alt="image"src={bg2} maxHeight="600px" />
                </GridLayout>
            </GridLayout>

            <Article />

            <GridLayout
                padding="20px 40px"
                columns="1fr 2fr"
                maxWidth="1920px"
                margin="0 auto"
                gap="20px"
                mediaPadding="20px"
            >
                <Image  alt="image"src={bg1} maxHeight="100%" />

                <GridLayout gap="20px">
                    <Image  alt="image"src={bg3} maxHeight="600px" />

                    <Image  alt="image"src={bg2} maxHeight="600px" />
                </GridLayout>
            </GridLayout>
        </Wrapper>
    );
}
