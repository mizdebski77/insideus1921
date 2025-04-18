import img1 from "../../assets/marynarki.png";
import img4 from "../../assets/sth.png";
import { GridLayout } from "../../components/Layout/Grid";
import { LinkTile } from "../../components/Tiles/ImageTile";

export const MainLinks = () => {
    return (
        <GridLayout
            padding="80px"
            columns="1fr 2fr"
            maxWidth="1800px"
            margin="0 auto"
            gap="20px"
            mediaPadding="20px"
        >
            <LinkTile
                href="/Kolekcja/Marynarki"
                backgroundImage={img4}
                width="100%"
                height="100%"
                minHeight="800px"
                hoverEffect
            >
                Marynarki
            </LinkTile>

            <GridLayout rows="1fr 1fr" gap="20px">
                <LinkTile
                    href="/Kolekcja/Plaszcze"
                    backgroundVideo="/videos/bgVideo.mp4"
                    width="100%"
                    height="100%"
                >
                    Płaszcze
                </LinkTile>

                <GridLayout columns="1fr 1fr" gap="20px">
                    <LinkTile
                        href="/Kolekcja/Plaszcze"
                        backgroundVideo="/videos/bgVideo.mp4"
                        width="100%"
                        minHeight="300px"
                        height="100%"
                    >
                        Komplety
                    </LinkTile>
                    <LinkTile
                        href="/Kolekcja/La-Haine"
                        backgroundImage={img1}
                        width="100%"
                        minHeight="400px"
                    >
                        La-Haine Inside us
                    </LinkTile>
                </GridLayout>
            </GridLayout>
        </GridLayout>
    );
};
