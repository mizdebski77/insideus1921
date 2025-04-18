import { ParallaxContainer, ParallaxWrapper } from "./styled";
import logo from "../../../assets/WhiteLogo.png";
import { Image } from "../../../components/Image";
import { ButtonLink } from "../../../components/Links/ButtonLink";


const ParallaxPage = () => {
    return (
        <>
            <ParallaxWrapper>
                <ParallaxContainer>
                    <Image
                        src={logo}
                        alt="Logo"
                        maxWidth="400px"
                        width="100%"
                        maxHeight="auto"
                    />
                    <ButtonLink href="/Marka">Nasza marka</ButtonLink>
                </ParallaxContainer>
            </ParallaxWrapper>
        </>
    );
};

export default ParallaxPage;
