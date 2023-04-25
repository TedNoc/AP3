import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';
// import Footer from './Footer';
import Connecter from './Connecter';
import Inscription from './Inscription';
import Admin from './Admin'
import Panier from './Panier';
import Supprime from './Supprime';
import Suppression from './Suppression';

function App() {
  return (
    <div className="App">
  <Sidebar/>
  {/* <Footer/> */}
   { <Routes>
    <Route path="/" element={<Panier />}/>  
  <Route path="/Connecter" element={<Connecter />}/>
 <Route path="/Produits" element={<Panier />}/>
 <Route path="/inscription" element={<Inscription />}/>
 <Route path="/admin" element={<Admin />}/>
 <Route path="/Sup" element={<Supprime />}/> 
 <Route path="/Del/:id" element={<Suppression />}/>
  </Routes> } 
    </div>
  );
}

export default App;
