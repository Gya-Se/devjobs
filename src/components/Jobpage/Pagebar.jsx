import React from 'react'
import scoot from '../../starter-code/assets/logos/scoot.svg'
import '../../styles/checkbox.css'
import styles from '../../styles/styles'

const Searchbar = () => {
    return (
        <>
            <div className={`${styles.toggleMid} rounded-lg flex mt-14`}>
                <div className='sm:violet bg-yellow-500 pr-2 w-32 h-32 flex justify-center rounded-l items-center'>
                    <img src={scoot} width={100} alt='scoot' />
                </div>
                <div className='flex items-center flex-grow px-16  justify-between'>
                    <div className='flex-grow'>
                        <div className={`${styles.textToggleWhite} text-2xl font-semibold`}>
                            Business Name
                        </div>
                        <div className='grey-text'>
                            website
                        </div>
                    </div>
                    <div className=''>
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