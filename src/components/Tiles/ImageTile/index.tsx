import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface TileProps {
    to: string;
    width?: string;
    height?: string;
    minWidth?: string;
    maxWidth?: string;
    minHeight?: string;
    maxHeight?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    backgroundColor?: string;
    borderRadius?: string;
    margin?: string;
    padding?: string;
    hoverEffect?: boolean;
    children?: React.ReactNode;
}

const StyledTile = styled.div<{
    $width?: string;
    $height?: string;
    $minWidth?: string;
    $maxWidth?: string;
    $minHeight?: string;
    $maxHeight?: string;
    $backgroundColor?: string;
    $borderRadius?: string;
    $margin?: string;
    $padding?: string;
}>`
    width: ${({ $width }) => $width || "300px"};
    height: ${({ $height }) => $height || "200px"};
    min-width: ${({ $minWidth }) => $minWidth || "none"};
    max-width: ${({ $maxWidth }) => $maxWidth || "none"};
    min-height: ${({ $minHeight }) => $minHeight || "none"};
    max-height: ${({ $maxHeight }) => $maxHeight || "none"};
    background-color: ${({ $backgroundColor }) =>
        $backgroundColor || "#f5f5f5"};
    background-size: cover;
    background-position: center;
    border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
    margin: ${({ $margin }) => $margin || "0"};
    padding: ${({ $padding }) => $padding || "20px"};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    color: white;
    font-size: 28px;
    font-weight: 400;
    font-style: italic;
    position: relative;

    &:hover {
        transform: scale(1.01);
    }

    z-index: 1;
`;

const BackgroundImage = styled.div<{ $backgroundImage?: string }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ $backgroundImage }) =>
        $backgroundImage ? `url(${$backgroundImage})` : "none"};
    background-size: cover;
    background-position: center;
    z-index: -2;
`;

const BackgroundVideo = styled.video<{ $backgroundVideo?: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); // tutaj sterujesz przyciemnieniem
    z-index: -1;
`;

const TileLink = styled(Link)`
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkTile: React.FC<TileProps> = ({
    to,
    children,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    backgroundImage,
    backgroundVideo,
    backgroundColor,
    borderRadius,
    margin,
    padding,
}) => {
    return (
        <TileLink to={to}>
            <StyledTile
                $width={width}
                $height={height}
                $minWidth={minWidth}
                $maxWidth={maxWidth}
                $minHeight={minHeight}
                $maxHeight={maxHeight}
                $backgroundColor={backgroundColor}
                $borderRadius={borderRadius}
                $margin={margin}
                $padding={padding}
            >
                {backgroundVideo && (
                    <BackgroundVideo
                        $backgroundVideo={backgroundVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </BackgroundVideo>
                )}

                {!backgroundVideo && backgroundImage && (
                    <BackgroundImage $backgroundImage={backgroundImage} />
                )}

                {(backgroundImage || backgroundVideo) && <Overlay />}

                {children}
            </StyledTile>
        </TileLink>
    );
};
