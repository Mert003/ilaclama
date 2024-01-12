import './App.css';
import { Routes , Route } from 'react-router-dom';
import NavigationBar from './components/navbar/navbar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <NavigationBar />
          <Routes  forceRefresh={true}>
               <Route path="/" element={<Home /> } />
              
          </Routes>
    </div>
  );
}

export default App;
