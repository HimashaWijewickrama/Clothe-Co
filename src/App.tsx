import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Advertisement } from "./components/advertisement";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";
import { AboutUs } from "./main/about-us";
import { AccessoriesComponent } from "./main/accessories";
import { FrocksComponent } from "./main/frocks"; // Import your Frocks component
import { Home } from "./main/home";
import { JumpSuitsComponent } from "./main/jumpsuits";
import { PantsComponent } from "./main/pants";
import { SkirtsComponent } from "./main/skirts";
import { TopsComponent } from "./main/tops";
import { TwoPiecesComponent } from "./main/twopieces";

function App() {
  return (
    <BrowserRouter>
      <Advertisement />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frocks" element={<FrocksComponent />} />
        <Route path="/tops" element={<TopsComponent />} />
        <Route path="/pants" element={<PantsComponent />} />
        <Route path="/skirts" element={<SkirtsComponent />} />
        <Route path="/jumpsuits" element={<JumpSuitsComponent />} />
        <Route path="/two-piece-sets" element={<TwoPiecesComponent />} />
        <Route path="/fashion-accessories" element={<AccessoriesComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
