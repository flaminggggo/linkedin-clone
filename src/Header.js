import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase';
import {  logout, selectUser } from './features/userSlice';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const logoutOfapp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1618218758~hmac=4194676291d68c0341ad5f483db4ed7d" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="Me" onClick={logoutOfapp} />
            </div>
        </div>
    )
}

export default Header
