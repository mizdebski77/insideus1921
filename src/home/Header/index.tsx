"use client";
import { BackgroundVideo, ContentWrapper, Header } from "./styled";
import logo from "../../assets/WhiteLogo.png";
import { Image } from "../../components/Image";
import bgVideo from "../../assets/videos/bgVideo.mp4";

export const Hero = () => {
    return (
        <Header>
            <ContentWrapper>
                <Image src={logo} alt="Logo" maxWidth="800px" width="100%" />
            </ContentWrapper>

            <BackgroundVideo src={bgVideo} autoPlay loop muted playsInline />
        </Header>
    );
};
