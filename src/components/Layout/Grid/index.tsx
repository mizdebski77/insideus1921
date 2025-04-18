"use client";

import { Wrapper } from "./styled";

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    columns?: string;
    rows?: string;
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    justifyItems?: "start" | "end" | "center" | "stretch";
    alignItems?: "start" | "end" | "center" | "stretch";
    justifyContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly";
    alignContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly";
    autoFlow?: "row" | "column" | "row dense" | "column dense";
    fullWidth?: boolean;
    fullHeight?: boolean;
    padding?: string;
    margin?: string;
    mediaPadding?: string;
    maxWidth?: string;
}

export const GridLayout: React.FC<GridLayoutProps> = ({
    children,
    columns = "1fr",
    rows = "auto",
    gap = "0",
    columnGap,
    rowGap,
    justifyItems = "stretch",
    alignItems = "stretch",
    justifyContent = "start",
    alignContent = "start",
    autoFlow = "row",
    fullWidth = false,
    fullHeight = false,
    padding = "0",
    mediaPadding = "unset",
    margin = "0",
    maxWidth = "unset",
}) => {
    return (
        <Wrapper
            $columns={columns}
            $rows={rows}
            $gap={gap}
            $columnGap={columnGap}
            $rowGap={rowGap}
            $justifyItems={justifyItems}
            $alignItems={alignItems}
            $justifyContent={justifyContent}
            $alignContent={alignContent}
            $autoFlow={autoFlow}
            $fullWidth={fullWidth}
            $fullHeight={fullHeight}
            $padding={padding}
            $mediaPadding={mediaPadding}
            $margin={margin}
            $maxWidth={maxWidth}
        >
            {children}
        </Wrapper>
    );
};
