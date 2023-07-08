import React from 'react'
import moon from '../starter-code/assets/desktop/icon-moon.svg'
import sun from '../starter-code/assets/desktop/icon-sun.svg'
import Switcher from './Switch'

const Header = () => {
    return (
        <>
            <div className=' bg-image flex dark:'>
                <div className='dark:text-white'>
                    devjobs
                </div>
                <div className='flex'>
                    <img src={sun} width={30} className="fill-gray-900" alt="sun" />
                    <Switcher />
                    <img src={moon} width={30} className="fill-gray-900" alt="moon" />
                </div>
            </div>
        </>
    )
}

export default Header