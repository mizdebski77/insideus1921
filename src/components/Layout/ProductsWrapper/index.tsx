import { Container, Wrapper } from "./styled";

interface ProductsWrapperProps {
    children: React.ReactNode;
    text?: string;
}

export const ProductsWrapper: React.FC<ProductsWrapperProps> = ({
    children,
}) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    );
};
