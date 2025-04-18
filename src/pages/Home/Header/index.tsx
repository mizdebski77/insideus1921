import { BackgroundVideo, ContentWrapper, Header } from "./styled";
import logo from "../../assets/WhiteLogo.png";
import bgVideo from "../../assets/videos/bgVideo.mp4";
import { Image } from "../../../components/Image";

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
