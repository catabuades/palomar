import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from './Components/TopBar/TopBar';
import Login from './Components/Login/Login';
import Registry from './Components/Registry/Registry';
import NewPigeon from './Components/AdminPigeonDataSheet/AdminPigeonDataSheet';
import AdminPigeonsList from './Components/AdminPigeonsList/AdminPigeonsList';

function App() {

  const data = {
    name: 'Parent',
    children: [{
        name: 'Child One',
    }, {
        name: 'Child Two'
    }]
};

  return (
    <div className="App">
      <Router>
        <header>
          <TopBar />
        </header>
        <main class="appMain">
         <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/dashboard" element={<AdminPigeonsList />} />
          <Route path="/dashboard/new-pigeon" element={<NewPigeon />} />
        </Routes>    
        </main>
        <footer>

        </footer>
      </Router>
    </div>
  );
}

export default App;
