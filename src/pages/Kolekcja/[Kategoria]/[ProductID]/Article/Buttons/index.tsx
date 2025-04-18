import { FlexLayout } from "../../../../../../components/Layout/Flex";
import { Button } from "../../../../../../components/Buttons/Button";
import { FaCartPlus } from "react-icons/fa";
import { AddToFav } from "../../../../../../components/Buttons/AddToFav";
interface ButtonsProps {
    onAddToCart: () => void;
    onAddToFav: () => void;
}
export const Buttons = ({ onAddToCart, onAddToFav }: ButtonsProps) => {
    return (
        <FlexLayout
            justify="space-between"
            margin="32px 0 0"
            align="center"
            gap="20px"
            mediaDirection="column"
        >
            <div>
                <Button onClick={onAddToCart}>
                    <FaCartPlus size={18} />
                    Dodaj do koszyka
                </Button>
            </div>

            <AddToFav onClick={onAddToFav} />
        </FlexLayout>
    );
};
