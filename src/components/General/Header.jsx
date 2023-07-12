import React from 'react'
import { Link } from 'react-router-dom'
import moon from '../../starter-code/assets/desktop/icon-moon.svg'
import sun from '../../starter-code/assets/desktop/icon-sun.svg'
import logo from '../../starter-code/assets/desktop/logo.svg'
import Switcher from './Switch'

const Header = () => {
    return (
        <>
            <div className='flex mt-10 justify-between'>
                <div className=''>
                    <Link to="/">
                    <img src={logo} className="pr-2" alt="logo" />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <div>
                        <img src={sun} className="pr-2" alt="sun" />
                    </div>
                    <div>
                        <Switcher />
                    </div>
                    <div>
                        <img src={moon} className="pl-2" alt="moon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header