import React from 'react'
import Header from "../components/General/Header.jsx";
import Job from "../components/Homepage/Job.jsx";
import Searchbar from '../components/Homepage/Searchbar.jsx'
import styles from '../styles/styles.js';

const HomePage = () => {
  return (
    <div className={`${styles.toggleDark}`}>
      <div className={`${styles.bgImage}`}>
        <div className={`${styles.absoluteTop}`}>
          <div className={`${styles.wrapper}`}>
            <Header />
            < Searchbar />
          </div>
        </div>
      </div>
      <div className='mt-16'></div>
      <div className={`${styles.wrapper}`}>
        <Job />
      </div>
    </div >
  )
}

export default HomePage