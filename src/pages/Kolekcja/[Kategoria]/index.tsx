import { ProductsWrapper } from "../../../components/Layout/ProductsWrapper";
import { ProductTile } from "../../../components/Tiles/ProductTile";
import { products } from "../../../constants/productsTESTING";

export default function Products() {

    return (
        <ProductsWrapper>
            {products.map(({ id, img, price, title }) => (
                <ProductTile
                    to={`/Kolekcja/Marynarki/${id}`}
                    title={title}
                    price={price}
                    url={img}
                    key={id}
                    imageAlt={title}
                />
            ))}
        </ProductsWrapper>
    );
}
