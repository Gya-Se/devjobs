import React from 'react'
import scoot from '../../starter-code/assets/logos/scoot.svg'
import '../../styles/checkbox.css'
import styles from '../../styles/styles'

const Searchbar = () => {
    return (
        <>
            <div className={`${styles.toggleMid} ${styles.centerItem} rounded-lg flex mt-14 sm:flex-col sm:mt-[4.5rem] sm:relative sm:pb-8`}>
                <div className={`${styles.pageBarImage} ${styles.centerItem} q sm:absolute sm:-top-5`}>
                    <img src={scoot} width={100} alt='scoot' />
                </div>
                <div className={`${styles.centerItem} flex flex-grow px-16 md:px-8 sm:flex-col sm:px-0 sm:w-full sm:mt-12`}>
                    <div className='flex-grow'>
                        <div className={`${styles.textToggleWhite} text-2xl font-semibold`}>
                            Business Name
                        </div>
                        <div className={`sm:${styles.centerItem} text-[#9daec2] sm:mt-2`}>
                            website
                        </div>
                    </div>
                    <div className='sm:mt-5'>
                        <button className={`${styles.secondaryButton} ${styles.secondaryBtnToggle}`}>
                            Company Site
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar