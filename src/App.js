import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav'
import Index from './Component/Index/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
function App() {
  return (


    <div className="App">
      
      <BrowserRouter>
      <Nav />
      <Index />
        
        <Routes>

          
          <Route path='/Contact' Component={Contact} />

        </Routes>
      </BrowserRouter>
    </div>



  );
}

export default App;
