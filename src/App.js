import './App.css';
import { Routes , Route } from 'react-router-dom';
import NavigationBar from './components/navbar/navbar';
import Home from './pages/home';
import Hakkimizda from './pages/hakkimizda';

function App() {
  return (
    <div className="App">
      <NavigationBar />
          <Routes  forceRefresh={true}>
               <Route path="/" element={<Home /> } />
               <Route path="/hakkimizda" element={<Hakkimizda /> } />
              
          </Routes>
    </div>
  );
}

export default App;
