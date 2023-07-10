import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../styles/list.css'
import styles from '../../styles/styles'
import Data from '../../starter-code/data.json'

const Main = () => {
    const { id } = useParams();
    const jobId = Number(id)
    return (
        <>
            {Data && Data.slice((jobId - 1), jobId).map((data) => {
                return (
                    <div className={`${styles.toggleMid} rounded-lg p-16 md:p-12 sm:p-8`}>
                        <div className={`${styles.centerItem} flex sm:flex-col`}>
                            <div className='flex-grow sm:w-full'>
                                <div className='text-[#9daec2]'>
                                    <span className='pr-2'>{data.postedAt}</span>
                                    <span className='text-2xl font-black'>.</span>
                                    <span className='pl-2'>{data.contract}</span>
                                </div>
                                <div className={`${styles.textToggleWhite} text-2xl font-bold my-2`}>
                                    {data.position}
                                </div>
                                <div className='text-[#5964e0] mt-3 text-sm font-bold'>
                                    {data.location}
                                </div>
                            </div>
                            <div className={`${styles.applyToggle}`}>
                                <button className={`${styles.primaryButton} sm:w-full`}>
                                    <Link to={data.apply}>Apply Now</Link>
                                </button>
                            </div>
                        </div>
                        <div className={`${styles.textToggleGrey} my-12`}>
                            <div>
                                {data.description}
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.textToggleWhite} text-xl font-semibold`}>Requirements</div>
                            <div className={`${styles.textToggleGrey} my-12`}>
                                <div>
                                    {data.requirements.content}
                                </div>
                                <ul className='req leading-loose mt-5'>
                                    {data.requirements.items.map((data, i) => {
                                        return (
                                            <li key={data}>{data}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.textToggleWhite} text-xl font-semibold`}>What You Will Do</div>
                            <div className={`${styles.textToggleGrey} my-12 mb-5`}>
                                <div>
                                    {data.role.content}
                                </div>
                                <ol className='wywd leading-loose mt-5'>
                                    {data.role.items.map(data => {
                                        return (
                                            <li key={data}>{data}</li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Main