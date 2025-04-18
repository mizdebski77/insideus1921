import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    background-color: #f8f4ee;
`;

const Filters = styled.div`
    display: flex;
    gap: 10px;
`;

const DropdownContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const DropdownButton = styled.div`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: white;
`;

const DropdownList = styled.ul<{ open: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    list-style: none;
    padding: 5px;
    margin: 0;
    display: ${({ open }) => (open ? "block" : "none")};
`;

const DropdownItem = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
`;

const Label = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

const FilterSortComponent: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <FilterContainer>
            <Filters>
                <Label>Filtry:</Label>
                {["Rozmiar", "Cena", "Kolor", "Coś"].map((filter) => (
                    <DropdownContainer
                        key={filter}
                        onMouseEnter={() => toggleDropdown(filter)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <DropdownButton>{filter} ▼</DropdownButton>
                        <DropdownList open={openDropdown === filter}>
                            <DropdownItem>Opcja 1</DropdownItem>
                            <DropdownItem>Opcja 2</DropdownItem>
                            <DropdownItem>Opcja 3</DropdownItem>
                        </DropdownList>
                    </DropdownContainer>
                ))}
            </Filters>
            <DropdownContainer
                onMouseEnter={() => toggleDropdown("Sortuj")}
                onMouseLeave={() => setOpenDropdown(null)}
            >
                <DropdownButton>Sortuj ▼</DropdownButton>
                <DropdownList open={openDropdown === "Sortuj"}>
                    <DropdownItem>Najtańsze</DropdownItem>
                    <DropdownItem>Najdroższe</DropdownItem>
                    <DropdownItem>Najpopularniejsze</DropdownItem>
                </DropdownList>
            </DropdownContainer>
        </FilterContainer>
    );
};

export default FilterSortComponent;
