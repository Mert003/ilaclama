import './App.css';
import { Router,Routes , Route } from 'react-router-dom';
import NavigationBar from './components/navbar/navbar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
          <Routes  forceRefresh={true}>
               <Route path="/" element={<Home /> } />
              
          </Routes>
          </Router>
    </div>
  );
}

export default App;
