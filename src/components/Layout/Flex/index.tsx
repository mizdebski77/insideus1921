"use client";
import { Wrapper } from "./styled";

interface FlexLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    justify?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    gap?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    padding?: string;
    margin?: string;
    maxWidth?: string;
    maxHeight?: string;
    minHeight?: string;
    mediaPadding?: string;
    mediaDirection?: string;
    mediaJustify?: FlexLayoutProps["justify"];
    border?: string;
    borderBottom?: string;
    mediaAlign?: FlexLayoutProps["align"];
}

export const FlexLayout: React.FC<FlexLayoutProps> = ({
    children,
    direction = "row",
    justify = "flex-start",
    align = "stretch",
    wrap = "nowrap",
    gap = "0",
    fullWidth = false,
    fullHeight = false,
    padding = "0",
    margin = "0",
    maxWidth = "unset",
    mediaPadding = "unset",
    mediaDirection,
    maxHeight = "unset",
    mediaAlign,
    border = "none",
    borderBottom,
    minHeight = "unset",
    mediaJustify,
}) => {
    return (
        <Wrapper
            $direction={direction}
            $justify={justify}
            $align={align}
            $wrap={wrap}
            $gap={gap}
            $fullWidth={fullWidth}
            $mediaAlign={mediaAlign}
            $fullHeight={fullHeight}
            $padding={padding}
            $margin={margin}
            $maxWidth={maxWidth}
            $mediaPadding={mediaPadding}
            $mediaDirection={mediaDirection}
            $border={border}
            $maxHeight={maxHeight}
            $minHeight={minHeight}
            $borderBottom={border}
            $mediaJustify={mediaJustify}
            {...(!!borderBottom &&
                borderBottom !== "" && { $borderBottom: borderBottom })}
        >
            {children}
        </Wrapper>
    );
};
