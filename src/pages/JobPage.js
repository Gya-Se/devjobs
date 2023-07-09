import React from 'react'
import Header from "../components/General/Header.jsx";
import Pagebar from "../components/Jobpage/Pagebar.jsx";
import Main from '../components/Jobpage/Main.jsx';
import Footer from '../components/Jobpage/Footer.jsx';
import styles from '../styles/styles.js';

const JobPage = () => {
    return (
        <div className={`${styles.toggleDark}`}>
            <div className={`${styles.bgImage}`}>
                <div className={`${styles.absoluteTop}`}>
                <div className={`${styles.wrapper}`}>
                        <Header />
                    </div>
                    <div className={`${styles.jobWrapper}`}>
                        <Pagebar />
                    </div>
                </div>
            </div>
            <div className='mt-32'></div>
            <div className={`${styles.jobWrapper}`}>
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default JobPage