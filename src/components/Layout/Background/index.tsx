import { Image, Wrapper } from "./styled"; // Assuming you have styled components for image and wrapper
import logo from "../../../assets/Logo.png";

export const ImageBackground = () => {
    return (
        <Wrapper>
            <Image src={logo} alt="Logo" />
        </Wrapper>
    );
};
