import React from 'react'
import styles from '../../styles/styles'

const JobPage = () => {
    return (
        <>
            <div>
                <div className='mt-16'></div>
                <div className={`${styles.toggleMid} py-6`}>
                    <div className={`${styles.jobWrapper} ${styles.smWrapper} ${styles.centerItem} flex sm:p-8 sm:relative`}>
                        <div className='flex-grow sm:flex-grow-0 sm:hidden'>
                            <div className={`${styles.textToggleWhite} text-md job-text font-bold my-1`}>
                                Job Title - eg. Senior Dev
                            </div>
                            <div className='grey-text'>
                                <span className=''>Slogan</span>
                            </div>
                        </div>
                        <div className={`${styles.applyToggle} sm:absolute sm:mb-12`}>
                            <button className={`${styles.primaryButton} sm:w-full`}>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobPage