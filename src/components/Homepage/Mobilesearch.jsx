import React, { useState } from 'react';
import search from '../../starter-code/assets/desktop/icon-search.svg'
import filter from '../../starter-code/assets/mobile/icon-filter.svg'
import location from '../../starter-code/assets/desktop/icon-location.svg'
import styles from '../../styles/styles'
import '../../styles/checkbox.css'
// import Data from '../../starter-code/data.json'

const Mobilesearch = () => {
    const [showModal, setShowModal] = useState(false);

    // const handleSubmit = (e) => e.preventDefault()

    // const handleSearchChange = (e) => {
    //     const resultsArray = Data.filter(data => data.company.includes(e.target.value) || data.position.includes(e.target.value))
    // }

    return (
        <>
            <div className={`${styles.toggleMid} rounded-lg flex mt-14`}>
                <div className={`${styles.toggleBorder} ${styles.textBoxCont} py-5 px-4`}>
                    <div className='flex-grow'>
                        <input type='text' className={`${styles.toggleMid} ${styles.textBox} dark:text-[#ffffff]`} placeholder='Enter job desc...' />
                    </div>
                    <div className='p-2 mr-3 cursor-pointer'>
                        <button onClick={() => setShowModal(true)}>
                            <img src={filter} className='dark:brightness-200' width={25} alt='search' />
                        </button>
                    </div>
                    <div className='p-2 bg-[#5964e0] w-[40px] h-[40px]   rounded-lg cursor-pointer'>
                        <img src={search} className='brightness-200 contrast-200 pt-[1px] pl-[1px]' width={20} alt='search' />
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className={`${styles.modal}`}>
                        <div className="relative w-4/5 my-6 mx-auto max-w-full">

                            {/*modal content*/}
                            <div className={`${styles.modalBox} ${styles.toggleMid} relative`}>

                                <div className="flex items-center justify-end right-5 top-2 font-black text-[#5964e0] absolute">
                                    <button className={``} onClick={() => setShowModal(false)} >
                                        X
                                    </button>
                                </div>
                                
                                {/*location filter*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid dark:border-slate-700 rounded-t">
                                    <div className={`${styles.toggleBorder} ${styles.textBoxCont} p-2`}>
                                        <div className='pr-3'>
                                            <img src={location} width={17} alt='location' />
                                        </div>
                                        <div className='flex-grow'>
                                            <input type='text' className={`${styles.toggleMid} ${styles.textBox} dark:text-[#ffffff]`} placeholder='Filter by location...' />
                                        </div>
                                    </div>
                                </div>

                                {/*checkbox*/}
                                <div className="relative p-6 pb-2 flex-auto">
                                    <label className='font-medium checkbox dark:text-[#ffffff]'>
                                        <input className='mr-2 p-3' type='checkbox' />
                                        <span class="checkmark"></span>
                                        Full time only
                                    </label>
                                </div>

                                {/*button*/}
                                <div className="flex items-center justify-end p-6">
                                    <button className={`${styles.primaryButton} w-full`} onClick={() => setShowModal(false)} >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-[0.5] fixed inset-0 z-40 bg-black" ></div>
                </>
            ) : null}
        </>
    )
}

export default Mobilesearch