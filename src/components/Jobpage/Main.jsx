import React from 'react'
import '../../styles/list.css'
import styles from '../../styles/styles'

const Main = () => {
    return (
        <>
            <div className={`${styles.toggleMid} rounded-lg p-16 md:p-12 sm:p-8`}>
                <div className={`${styles.centerItem} flex sm:flex-col`}>
                    <div className='flex-grow sm:w-full'>
                        <div className='text-[#9daec2]'>
                            <span className='pr-2'>Time</span>
                            <span className='text-2xl font-black'>.</span>
                            <span className='pl-2'>Full/Part</span>
                        </div>
                        <div className= {`${styles.textToggleWhite} text-2xl font-bold my-2`}>
                            Job Title - eg. Senior Dev
                        </div>
                        <div className='text-[#5964e0] mt-3 text-sm font-bold'>
                            Location
                        </div>
                    </div>
                    <div className={`${styles.applyToggle}`}>
                        <button className={`${styles.primaryButton} sm:w-full`}>
                            Apply Now
                        </button>
                    </div>
                </div>
                <div className={`${styles.textToggleGrey} my-12`}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </div>
                </div>
                <div>
                    <div className= {`${styles.textToggleWhite} text-xl font-semibold`}>Requirements</div>
                    <div className={`${styles.textToggleGrey} my-12`}>
                        <div>
                            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                        </div>
                        <ul className='req leading-loose mt-5'>
                            <li>Morbi interdum mollis sapien. Sed</li>
                            <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
                            <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
                            <li>Morbi interdum mollis sapien. Sed</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={`${styles.textToggleWhite} text-xl font-semibold`}>What You Will Do</div>
                    <div className={`${styles.textToggleGrey} my-12 mb-5`}>
                        <div>
                            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna
                        </div>
                        <ol className='wywd leading-loose mt-5'>
                            <li>Morbi interdum mollis sapien. Sed</li>
                            <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
                            <li>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.</li>
                            <li>Morbi interdum mollis sapien. Sed</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main