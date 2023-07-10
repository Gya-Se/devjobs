import React from 'react'
import styles from '../../styles/styles'
import Data from '../../starter-code/data.json'
import { useParams, Link } from 'react-router-dom'

const Footer = () => {
    const { id } = useParams();
    const jobId = Number(id)

    return (
        <>
            <div>
                <div className='mt-16'></div>
                {Data && Data.slice((jobId - 1), jobId).map((data) => {
                    return (
                <div className={`${styles.toggleMid} py-6`}>
                    <div className={`${styles.jobWrapper} ${styles.smWrapper} ${styles.centerItem} flex sm:p-8 sm:relative`}>
                        <div className='flex-grow sm:flex-grow-0 sm:hidden'>
                            <div className={`${styles.textToggleWhite} text-md job-text font-bold my-1`}>
                                {data.position}
                            </div>
                            <div className='text-[#9daec2]'>
                                <span className=''>{data.company}</span>
                            </div>
                        </div>
                        <div className={`${styles.applyToggle} sm:absolute sm:mb-12`}>
                            <button className={`${styles.primaryButton} sm:w-full`}>
                                <Link to={data.apply}>Apply Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
                    )
                }
                )}
            </div>
        </>
    )
}

export default Footer