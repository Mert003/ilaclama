import './App.css';
import { Routes , Route } from 'react-router-dom';
import NavigationBar from './components/navbar/navbar';
import Home from './pages/home';
import Hakkimizda from './components/hakkimizda';
import Footer from './components/footer/Footer';
import Farekovucu from './pages/urunlistesi/farekovucu';
import Kuskovucu from './pages/urunlistesi/kuskovucu';
import Kedikopek from "./pages/urunlistesi/kedikopek";
import Kusengelleyici from './pages/urunlistesi/kusengelleyici';
import ContactPage from './pages/contact';
import Ag450 from './pages/urunler/ag450';
import Ag225 from './pages/urunler/ag225';
import Ag325 from './pages/urunler/ag325';
import Ag715 from './pages/urunler/ag715';
import Ag113 from './pages/urunler/ag113';
import Ultrasonik from './pages/urunler/ultrasonik';

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
               
               <Route path="/kusengelleyici" element={<Kusengelleyici /> } />
               <Route path="/iletisim" element={<ContactPage /> } />

               <Route path="/ag450" element={<Ag450 /> } />
               <Route path="/ag225" element={<Ag225 /> } />
               <Route path="/ag325" element={<Ag325 /> } />
               <Route path="/ag715" element={<Ag715 /> } />
               <Route path="/ag113" element={<Ag113 /> } />
               <Route path="/ultrasonik" element={<Ultrasonik  /> } />

              
          </Routes>
      <Footer />

    </div>
  );
}

export default App;
