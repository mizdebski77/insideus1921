import Navigation from "./common/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Edytorial from "./pages/Edytorial";
import Marka from "./pages/Marka";
import Regulamin from "./pages/Regulamin";
import Cart from "./pages/Koszyk";
import Checkout from "./pages/Kasa";
import Products from "./pages/Kolekcja/[Kategoria]";
import ProductPage from "./pages/Kolekcja/[Kategoria]/[ProductID]/produktid";

export const pages = {
    "/": Home,
    "/Kolekcja/Marynarki": Products,
    "/Kolekcja/:Kategoria/:ProductID": ProductPage,
    "/Kolekcja/Plaszcze": Home,
    "/Kolekcja/Komplety": Home,
    "/Kolekcja/La-Haine": Home,
    "/Regulamin": Regulamin,
    "/Edytorial": Edytorial,
    "/Marka": Marka,
    "/Koszyk": Cart,
    "/Kasa": Checkout,
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
