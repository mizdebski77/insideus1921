import { Span, Wrapper, IconWrapper } from "./styled";
import { CiHeart } from "react-icons/ci";
interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const AddToFav: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <IconWrapper>
                <CiHeart size={40} style={{ margin: "0 auto" }} />
            </IconWrapper>
            <Span>Dodaj do ulubionych</Span>
        </Wrapper>
    );
};
