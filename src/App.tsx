import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import  { FrocksComponent }  from './main/frocks'; // Import your Frocks component
import { TopsComponent } from './main/tops';
import { Home } from './main/home';
import { PantsComponent } from './main/pants';
import { SkirtsComponent } from './main/skirts';
import { JumpsuitsComponent } from './main/jumpsuits';
import { TwoPiecesComponent } from './main/twopieces';
import { AccessoriesComponent } from './main/accessories';
import { NewInComponent } from './main/newin';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
		<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<NewInComponent/>}/>

      <Route path="/frocks" element={<FrocksComponent />} />
      <Route path="/tops" element={<TopsComponent />} />
      <Route path='/pants' element={<PantsComponent/>}/>
      <Route path='/skirts' element={<SkirtsComponent/>}/>
      <Route path='/jumpsuits' element={<JumpsuitsComponent/>}/>
      <Route path='/two-piece-sets' element={<TwoPiecesComponent/>}/>
      <Route path='/fashion-accessories' element={<AccessoriesComponent/>}/>



		</Routes>

    <Footer/>
	</BrowserRouter>

  );
}

export default App;
