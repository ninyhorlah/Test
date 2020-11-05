import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import SideNavigation from './SideNav'
import Toggleicon from './Toggleicon'

const TopNav = () => {

    const [SideNav, setSideNav ] = useState(false)

    let menu;

    if(SideNav){
        menu = <div className='showToggle'>
            <SideNavigation/>
        </div>
    }
    return (
        <div className='TopNav'>
            <div className='LogoSection'>
                <div className="logo">
                    <h4>TransMonitor</h4>
                </div>
                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>
            <div className='SupportSection'>
                <div className='Support'>
                    <h6>Support</h6>
                </div>
                <div className='Support'>
                    <h6>FAQ</h6>
                </div>
                <div className='Support'>
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className='user'>
                    <div className='name'>
                        <p>Hello</p>
                        <h6>Oluwaleke Ojo</h6>
                    </div>
                    <div>
                        <img src='/assets/img.svg' alt=""/>
                    </div>
                    <div onClick={() => setSideNav(!SideNav)}>
                        <Toggleicon/>
                    </div>
                    
                    
                    
                </div>
                {menu}
            </div>
            
        </div>
    )
}

export default TopNav
