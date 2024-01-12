import './App.css';
import { Routes , Route } from 'react-router-dom';
import NavigationBar from './components/navbar/navbar';
import Home from './pages/home';
import Hakkimizda from './components/hakkimizda';
import Footer from './components/footer/Footer';
import Farekovucu from './pages/urunlistesi/farekovucu';
import Kuskovucu from './pages/urunlistesi/kuskovucu';
import Kedikopek from "./pages/urunlistesi/kedikopek";

function App() {
  return (
    <div className="App">
      <NavigationBar />
          <Routes  forceRefresh={true}>
               <Route path="/" element={<Home /> } />
               <Route path="/hakkimizda" element={<Hakkimizda /> } />
               <Route path="/farehasere" element={<Farekovucu /> } />
               <Route path="/kuskovucu" element={<Kuskovucu /> } />
               <Route path="/kedikopekkovucu" element={<Kedikopek /> } />
              
          </Routes>
      <Footer />

    </div>
  );
}

export default App;
