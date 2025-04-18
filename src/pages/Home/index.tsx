import { Hero } from "./Header";
import { MainLinks } from "./MainLinks";
import ParallaxPage from "./Parallax";
import { SecondaryLinks } from "./SecondaryLinks";

export const Home = () => {
    return (
        <>
            <Hero />
            <MainLinks />
            <ParallaxPage />
            <SecondaryLinks />
        </>
    );
};
