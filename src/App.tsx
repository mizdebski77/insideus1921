import Navigation from "./common/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Edytorial from "./pages/Edytorial";
import Marka from "./pages/Marka";
import Regulamin from "./pages/Regulamin";

export const pages = {
    "/": Home,
    "/Kolekcja/Marynarki": Home,
    "/Kolekcja/Plaszcze": Home,
    "/Kolekcja/Komplety": Home,
    "/Kolekcja/La-Haine": Home,
    "/Regulamin": Regulamin,
    "/Edytorial": Edytorial,
    "/Marka": Marka,
};

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                {Object.entries(pages).map(([path, Component]) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
