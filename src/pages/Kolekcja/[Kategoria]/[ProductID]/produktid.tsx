import { useParams } from "react-router-dom";
import { GridLayout } from "../../../../components/Layout/Grid";
import { Wrapper } from "../../../../components/Layout/PageWrapper";
import { Article } from "../../../Kolekcja/[Kategoria]/[ProductID]/Article";
import { products } from "../../../../constants/productsTESTING";
import { Recommendation } from "./Recommendation";
import { Gallery } from "./Gallery/index.";

export default function ProductPage() {
    const { Kategoria, ProductID } = useParams<{
        Kategoria: string;
        ProductID: string;
    }>();

    const product = products.find((p) => p.id === ProductID);

    if (!product) {
        return <div>Produkt nie został znaleziony.</div>;
    }

    return (
        <Wrapper maxWidth="1720px">
            <GridLayout columns="1.2fr 1fr" gap="40px">
                <Gallery gallery={product.gallery} />
                <Article
                    productId={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />
            </GridLayout>
            <Recommendation />
        </Wrapper>
    );
}
