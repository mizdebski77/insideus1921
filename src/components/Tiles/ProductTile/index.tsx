import { Image } from "../../Image";
import { Paragraph } from "../../Typography/Paragraph";
import { Wrapper } from "./styled";
import { Button } from "../../Buttons/Button";

interface ProductTileWrapper {
    title: string;
    price: string;
    url: string;
    imageAlt: string;
    href: string;
    onRemoveFromFav?: () => void;
    maxWidth?: string;
}

export const ProductTile: React.FC<ProductTileWrapper> = ({
    title,
    price,
    url,
    imageAlt,
    href,
    onRemoveFromFav,
    maxWidth,
}) => {
    return (
        <Wrapper href={href}>
            <Image
                src={url}
                alt={imageAlt}
                maxHeight="1000px"
                maxWidth={maxWidth}
                height="100%"
            />
            <Paragraph fontSize="20px">{title}</Paragraph>
            <Paragraph fontSize="18px" opacity={0.7} margin="0 0 24px">
                {price} zł
            </Paragraph>

            {onRemoveFromFav && (
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        onRemoveFromFav();
                    }}
                >
                    Usuń z ulubionych
                </Button>
            )}
        </Wrapper>
    );
};
