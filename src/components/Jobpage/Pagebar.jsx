import React from 'react'
import '../../styles/checkbox.css'
import styles from '../../styles/styles'
import { useParams, Link } from 'react-router-dom'
import Data from '../../starter-code/data.json'

const Searchbar = () => {
    const { id } = useParams();
    const jobId = Number(id)
    const job = Data.find(
        (elem) => elem.id === jobId
    )
    console.log(job.logo)
    return (
        <>
            <div className={`${styles.toggleMid} ${styles.centerItem} rounded-lg flex mt-14 sm:flex-col sm:mt-[4.5rem] sm:relative sm:pb-8`}>
                <div style={{ backgroundColor: `${job.logoBackground}` }}  className={`${styles.pageBarImage} ${styles.centerItem} sm:absolute sm:-top-5`}>
                    <img src={job.logo} width={100} alt={job.company} />
                </div>
                <div className={`${styles.centerItem} flex flex-grow px-16 md:px-8 sm:flex-col sm:px-0 sm:w-full sm:mt-12`}>
                    <div className='flex-grow'>
                        <div className={`${styles.textToggleWhite} text-2xl font-semibold`}>
                            {job.company}
                        </div>
                        <div className={`sm:${styles.centerItem} text-[#9daec2] sm:mt-2`}>
                            {job.website}
                        </div>
                    </div>
                    <div className='sm:mt-5'>
                        <button className={`${styles.secondaryButton} ${styles.secondaryBtnToggle}`}>
                            <Link to={job.website}>
                            Company Site
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar