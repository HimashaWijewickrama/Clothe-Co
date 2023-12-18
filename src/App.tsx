import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import  { FrocksComponent }  from './main/frocks'; // Import your Frocks component
import { TopsComponent } from './main/tops';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
		<Routes>

      <Route path="/frocks" element={<FrocksComponent />} />
      <Route path="/tops" element={<TopsComponent />} />


		</Routes>
    <Footer/>
	</BrowserRouter>

  );
}

export default App;
