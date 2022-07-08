import { Routes, Route } from 'react-router-dom';
import LaptopDetails from './pages/LaptopDetails';
import Home from './pages/Home';
import classes from './App.module.css'
import LaptopContextProvider from './context/laptop-context';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <LaptopContextProvider>
      <div className={classes.app}>
        <Navbar />
        <div className={classes.container}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/laptop/:model' element={<LaptopDetails />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </LaptopContextProvider>
  );
}

export default App;
