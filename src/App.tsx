import Navigation from "./common/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Home />
        </BrowserRouter>
    );
}

export default App;
