import React from 'react'
import styles from '../../styles/styles'

const JobPage = () => {
    return (
        <>
            <div>
                <div className='mt-16'></div>
                <div className={`${styles.toggleMid} py-6`}>
                    <div className={`${styles.jobWrapper} ${styles.centerItem} flex`}>
                        <div className='flex-grow'>
                            <div className={`${styles.textToggleWhite} text-md job-text font-bold my-1`}>
                                Job Title - eg. Senior Dev
                            </div>
                            <div className='grey-text'>
                                <span className=''>Slogan</span>
                            </div>
                        </div>
                        <div>
                            <button className={`${styles.primaryButton}`}>
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