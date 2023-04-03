import './App.css';
import { useState, useEffect } from 'react';

import MainMobile from './components/MainMobile/Main';
import Main from './components/MainDefault/Main';
import useWindowSize from './Hooks/useWindowSize';
import NavBar from './components/MainDefault/NavBar';
import NavBarMobile from './components/MainMobile/NavBarMoblie';
import PreLoader from './components/PreLoader';

function App() {
  const [loaded, setLoading] = useState(true);
  const size = useWindowSize();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loaded) {
    return <PreLoader />;
  }

  return size.width > 1000 ? (
    <div className="App contentIntro show">
      <NavBar />
      <main className="lines bodylines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

        <Main />
      </main>
    </div>
  ) : (
    <div className="App contentIntro show">
      <NavBarMobile />
      <main className="lines bodylines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

        <MainMobile />
      </main>
    </div>
  );
}

export default App;
