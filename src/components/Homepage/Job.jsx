import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles'
import Data from '../../starter-code/data.json'


const Job = () => {
    const jobsPerPage = 12
    const [next, setNext] = useState(jobsPerPage);
    const handleMoreImage = () => {
        setNext(next + jobsPerPage);
    };
    return (
        <>
            <div className={`${styles.contGrid}`}>
                {
                    Data && Data.slice(0, next).map(data => {
                        return (
                            <div className='relative' key={data.id}>
                                <div style={{ backgroundColor: `${data.logoBackground}` }} className={`${styles.centerItem} w-[45px] h-[45px] absolute top-0 ml-6 mb-5 pl-2 rounded-2xl`}>
                                    <img src={data.logo} className="pr-2" alt={data.company} />
                                </div>
                                <div className={`${styles.toggleMid} p-6 mt-6 rounded-lg`}>
                                    <div className='mt-3'>
                                        <div className='text-[#9daec2]'>
                                            <span className='pr-2'>{data.postedAt}</span>
                                            <span className='text-2xl font-black'>.</span>
                                            <span className='pl-2'>{data.contract}</span>
                                        </div>
                                        <div className={`${styles.textToggleWhite} text-xl cursor-pointer font-bold my-2`}>
                                            <Link to={"/job/" + data.id} className='hover:text-[#9daec2]'>
                                                {data.position}
                                            </Link>
                                        </div>
                                        <div className='text-[#9daec2]'>
                                            {data.company}
                                        </div>
                                        <div className='text-[#5964e0] mt-8 mb-5 text-sm font-bold'>
                                            {data.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/*Load more button  */}
            <div className={`${styles.centerItem} mt-12`}>
                <button onClick={handleMoreImage} className={`${styles.primaryButton}`}>
                    Load more
                </button>
            </div>
            <div className='py-6'>
            </div>
        </>
    )
}

export default Job