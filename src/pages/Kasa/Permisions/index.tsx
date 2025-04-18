import { FlexLayout } from "../../../components/Layout/Flex";
import { Tile } from "../../../components/Tiles/Tile";
import { Paragraph } from "../../../components/Typography/Paragraph";
import styled from "styled-components";
import { theme } from "../../../core/StyledComponents/theme";

// Styled components
const CustomCheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const CustomCheckbox = styled.div<{ checked: boolean }>`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid ${theme.palette.mainColor};
    background-color: ${({ checked }) =>
        checked ? theme.palette.mainColor : "transparent"};
    position: relative;
    margin-right: 10px;
    transition: background-color 0.3s ease;
`;

type Props = {
    isChecked: boolean[];
    setIsChecked: (val: boolean[]) => void;
    triedSubmit: boolean;
};

export const Permissions = ({
    isChecked,
    setIsChecked,
    triedSubmit,
}: Props) => {
    const handleToggleCheckbox = (index: number) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    return (
        <Tile>
            <Paragraph
                fontSize="24px"
                fontWeight={700}
                margin="0 0 20px"
                mediaFontSize="18px"
                mediaTextAlign="center"
            >
                Zgody
            </Paragraph>

            <FlexLayout gap="10px" direction="column">
                {[
                    "Akceptuję ",
                    "Akceptuję ",
                    "Zgadzam się, że produkt jest wykonany na specjalne zamówienie i nie podlega zwrotowi.",
                ].map((text, index) => (
                    <CustomCheckboxWrapper
                        key={index}
                        onClick={() => handleToggleCheckbox(index)}
                    >
                        <CustomCheckbox
                            checked={isChecked[index]}
                            style={{
                                borderColor:
                                    triedSubmit && !isChecked[index]
                                        ? `${theme.palette.secondaryColor}`
                                        : theme.palette.mainColor,
                            }}
                        />{" "}
                        <Paragraph
                            fontSize="16px"
                            style={{
                                color:
                                    triedSubmit && !isChecked[index]
                                        ? `${theme.palette.secondaryColor}`
                                        : "inherit",
                            }}
                        >
                            <strong
                                style={{
                                    color: `${theme.palette.secondaryColor}`,
                                }}
                            >
                                *
                            </strong>
                            {text}
                            {index === 0 && (
                                <a
                                    href="/regulamin"
                                    target="_blank"
                                    style={{
                                        color: theme.palette.mainColor,
                                    }}
                                >
                                    Regulamin
                                </a>
                            )}
                            {index === 1 && (
                                <a
                                    href="/polityka-prywatnosci"
                                    target="_blank"
                                    style={{
                                        color: theme.palette.mainColor,
                                    }}
                                >
                                    Politykę prywatności
                                </a>
                            )}
                        </Paragraph>
                    </CustomCheckboxWrapper>
                ))}
            </FlexLayout>
        </Tile>
    );
};
