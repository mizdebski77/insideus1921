"use client";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "./styled";

interface RemoveButtonProps {
    onClick: () => void;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <IoTrashOutline style={{ margin: "0 auto" }} />
        </Button>
    );
};
