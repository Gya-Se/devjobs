import React, { useEffect, useState } from 'react'
import Header from "../components/General/Header.jsx";
import Job from "../components/Homepage/Job.jsx";
import Searchbar from '../components/Homepage/Searchbar.jsx'
import Mobilesearch from '../components/Homepage/Mobilesearch.jsx'
import styles from '../styles/styles.js';

const HomePage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div className={`${styles.toggleDark}`}>
      <div className={`${styles.bgImage}`}>
        <div className={`${styles.absoluteTop}`}>
          <div className={`${styles.wrapper}`}>
            <Header />
            {windowSize.innerWidth > 768 ? (
              < Searchbar />
            ) : (
              < Mobilesearch />
            )}
          </div>
        </div>
      </div>
      <div className='mt-16 md:mt-24 sm:mt-24'></div>
      <div className={`${styles.wrapper}`}>
        <Job />
      </div>
    </div >
  )
}


export default HomePage