import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../Typography/Paragraph";
import { theme } from "@/app/core/StyledComponents/theme";

// Props type
interface DeliveryTileProps {
    selected?: boolean;
    logo: string;
    description: string;
    price: string | number; // <-- pozwól na number
    onClick?: () => void;
}

const Logo = styled.img`
    width: 80px;
    height: auto;
    margin-bottom: 8px;
`;

const Tile = styled.div<{ selected?: boolean }>`
    position: relative;
    width: 200px;
    height: 170px;
    border: 0.5px solid ${theme.palette.mainColor};
    border-radius: 12px;
    padding: 16px;
    box-shadow: ${({ selected }) =>
        selected
            ? `0 0 0 2px ${theme.palette.mainColor}`
            : "0 0 0 0 transparent"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease;
    background-color: ${theme.palette.thirdColor};
    cursor: pointer;
`;

const Circle = styled.div<{ selected?: boolean }>`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ selected }) =>
        selected ? theme.palette.mainColor : "#ccc"};
    border: 1px solid white;
    box-shadow: 0 0 0 2px
        ${({ selected }) => (selected ? theme.palette.mainColor : "#ccc")};
`;

// Component
const DeliveryTile: React.FC<DeliveryTileProps> = ({
    selected = false,
    logo,
    description,
    price,
    onClick,
}) => {
    return (
        <Tile selected={selected} onClick={onClick}>
            <Circle selected={selected} />
            <Logo src={logo} alt="Delivery logo" />
            <Paragraph fontSize="16px">{description}</Paragraph>
            <Paragraph fontSize="14px">{price} zł</Paragraph>
        </Tile>
    );
};

export default DeliveryTile;
