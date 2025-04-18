import Navigation from "./common/Navigation";
import { Hero } from "./home/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Hero />
        </BrowserRouter>
    );
}

export default App;
