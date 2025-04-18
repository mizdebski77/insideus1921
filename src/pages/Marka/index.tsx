import { Header } from "../../components/Header";
import { Image } from "../../components/Image";
import { FlexLayout } from "../../components/Layout/Flex";
import { GridLayout } from "../../components/Layout/Grid";
import { Paragraph } from "../../components/Typography/Paragraph";
import bg1 from "../../assets/suknie.png";
import bg2 from "../../assets/sth.png";
import bg3 from "../../assets/sth2.png";

export default function Marka() {
    return (
        <>
            <Header text="Marka" backgroundUrl={bg2} />
            <FlexLayout
                minHeight="100vh"
                padding=" 40px"
                maxWidth="1200px"
                margin="0 auto"
                mediaPadding="40px 20px"
            >
                <GridLayout alignItems="center" justifyContent="center">
                    <GridLayout columns="1fr 1fr" gap="40px">
                        <Image alt="image" src={bg1} maxHeight="600px" />

                        <FlexLayout align="center">
                            <Paragraph fontSize="18px" mediaTextAlign="justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus iste dolores ab sed
                                ad! Neque, fugit. Aliquid sint nisi sapiente
                                consequatur molestias quia dolores blanditiis
                                dolore molestiae iusto. Debitis, reprehenderit!
                            </Paragraph>
                        </FlexLayout>
                    </GridLayout>

                    <GridLayout columns="1fr 1fr" gap="40px">
                        <FlexLayout align="center">
                            <Paragraph fontSize="18px" mediaTextAlign="justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus iste dolores ab sed
                                ad! Neque, fugit. Aliquid sint nisi sapiente
                                consequatur molestias quia dolores blanditiis
                                dolore molestiae iusto. Debitis, reprehenderit!
                            </Paragraph>
                        </FlexLayout>
                        <Image alt="image" src={bg3} maxHeight="600px" />
                    </GridLayout>
                </GridLayout>
            </FlexLayout>
        </>
    );
}
