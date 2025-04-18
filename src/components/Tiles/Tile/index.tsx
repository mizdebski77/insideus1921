import { Wrapper } from "./styled";

interface TileProps {
    children: React.ReactNode;
    maxWidth?: string;
}

export const Tile: React.FC<TileProps> = ({ children, maxWidth }) => {
    return <Wrapper $maxWidth={maxWidth}>{children}</Wrapper>;
};
