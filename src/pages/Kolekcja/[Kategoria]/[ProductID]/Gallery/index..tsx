import { useState } from "react";
import { MainImage, Thumbnails } from "./styled";
import { FlexLayout } from "../../../../../components/Layout/Flex";

export const Gallery = ({ gallery }: { gallery: string[] }) => {
    const [selectedImage, setSelectedImage] = useState(gallery[0]);

    return (
        <FlexLayout gap="10px" mediaDirection="column">
            <MainImage>
                <img
                    src={selectedImage}
                    alt="Main view"
                    width={600}
                    height={400}
                />
            </MainImage>
            <Thumbnails>
                {gallery.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        width={100}
                        height={80}
                        onClick={() => setSelectedImage(img)}
                        className={img === selectedImage ? "active" : ""}
                    />
                ))}
            </Thumbnails>
        </FlexLayout>
    );
};
