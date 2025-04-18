import { GridLayout } from "../../../components/Layout/Grid";
import { LinkTile } from "../../../components/Tiles/ImageTile";
import { Paragraph } from "../../../components/Typography/Paragraph";
import img5 from "../../assets/sth2.png";

export const SecondaryLinks = () => {
    return (
        <GridLayout
            padding="80px"
            maxWidth="1800px"
            margin="0 auto"
            gap="20px"
            mediaPadding="20px"
        >
            <LinkTile
                href="/Marka"
                backgroundImage={img5}
                width="100%"
                height="100%"
                minHeight="400px"
            >
                Marka
            </LinkTile>

            <GridLayout gap="20px" columns="1fr 2fr">
                <LinkTile
                    href="/Kolekcja/Plaszcze"
                    backgroundVideo="/videos/bgVideo.mp4"
                    width="100%"
                    minHeight="400px"
                    height="100%"
                >
                    Edytorial
                </LinkTile>

                <GridLayout gap="40px">
                    <GridLayout columns="1fr 1fr" gap="40px">
                        <LinkTile
                            href="/Regulamin"
                            backgroundImage={img5}
                            width="100%"
                            height="100%"
                            minHeight="400px"
                        >
                            Regulamin
                        </LinkTile>

                        <Paragraph textAlign="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet soluta mollitia in voluptatem porro
                            laborum maxime, nam accusantium quia beatae
                            necessitatibus consectetur architecto qui! Voluptate
                            accusantium similique impedit consequatur sed. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet soluta mollitia in voluptatem porro laborum
                            maxime, nam accusantium quia beatae necessitatibus
                            consectetur architecto qui! Voluptate accusantium
                            similique impedit consequatur sed. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eveniet
                            soluta mollitia in voluptatem porro laborum maxime,
                            nam accusantium quia beatae necessitatibus
                            consectetur architecto qui! Voluptate accusantium
                            similique impedit consequatur sed. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eveniet
                            soluta mollitia in voluptatem porro laborum maxime,
                            nam accusantium quia beatae necessitatibus
                            consectetur architecto qui! Voluptate accusantium
                            similique impedit consequatur sed.
                        </Paragraph>
                    </GridLayout>

                    <GridLayout columns="1fr 1fr" gap="40px">
                        <Paragraph textAlign="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet soluta mollitia in voluptatem porro
                            laborum maxime, nam accusantium quia beatae
                            necessitatibus consectetur architecto qui! Voluptate
                            accusantium similique impedit consequatur sed. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet soluta mollitia in voluptatem porro laborum
                            maxime, nam accusantium quia beatae necessitatibus
                            consectetur architecto qui! Voluptate accusantium
                            similique impedit consequatur sed. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eveniet
                            soluta mollitia in voluptatem porro laborum maxime,
                            nam accusantium quia beatae necessitatibus
                            consectetur architecto qui! Voluptate accusantium
                            similique impedit consequatur sed. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Eveniet
                            soluta mollitia in voluptatem porro laborum maxime,
                            nam accusantium quia beatae necessitatibus
                            consectetur architecto qui! Voluptate accusantium
                            similique impedit consequatur sed.
                        </Paragraph>

                        <LinkTile
                            href="/Kolekcja/Plaszcze"
                            backgroundVideo="/videos/bgVideo.mp4"
                            width="100%"
                            height="100%"
                            minHeight="400px"
                        >
                            Inside us 1921
                        </LinkTile>
                    </GridLayout>
                </GridLayout>
            </GridLayout>
        </GridLayout>
    );
};
