import React from 'react'
import search from '../../starter-code/assets/desktop/icon-search.svg'
import location from '../../starter-code/assets/desktop/icon-location.svg'
import '../../styles/checkbox.css'
import styles from '../../styles/styles'

const Searchbar = () => {
    return (
        <>
            <div className={`${styles.toggleMid} rounded-lg flex mt-14`}>
                <div className= {`${styles.toggleBorder} ${styles.textBoxCont} p-4 border-r`}>
                    <div className='pr-2'>
                        <img src={search} width={15} alt='search' />
                    </div>
                    <div className='flex-grow'>
                        <input type='text' className={`${styles.toggleMid} ${styles.textBox} dark:text-[#ffffff]`} placeholder='Filter by title, companies, expertise...' />
                    </div>
                </div>
                <div className= {`${styles.toggleBorder} ${styles.textBoxCont} p-4 border-r`}>
                    <div className='pr-2'>
                        <img src={location} width={12} alt='location' />
                    </div>
                    <div className='flex-grow'>
                        <input type='text' className={`${styles.toggleMid} ${styles.textBox} dark:text-[#ffffff]`} placeholder='Filter by location...' />
                    </div>
                </div>
                <div className= {`${styles.toggleBorder} ${styles.textBoxCont} p-2 justify-between`}>
                    <div className={`${styles.centerItem}`} >
                        <label className='font-medium checkbox dark:text-[#ffffff]'>
                            <input className='mr-2 p-3' type='checkbox' />
                            <span class="checkmark"></span>
                            Full time only
                        </label>
                    </div>
                    <div>
                        <button className={`${styles.primaryButton}`}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar