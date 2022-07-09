import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import classes from './App.module.css'
import LaptopContextProvider from './context/laptop-context';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import { lazy, Suspense } from 'react';

const LaptopDetails = lazy(() => import('./pages/LaptopDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <LaptopContextProvider>
      <div className={classes.app}>
        <Navbar />
        <div className={classes.container}>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/laptop/:model' element={<LaptopDetails />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </LaptopContextProvider>
  );
}

export default App;
