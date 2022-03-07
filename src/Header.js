import React from 'react';
import '../src/styles/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar,IconButton } from '@mui/material';
import logo from '../src/images/gmail.png';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header(){
    return (
    <div className='heading'>
        <div className="header-left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src={logo} alt="gmail" />
        </div>
        <div className="header-middle">
            <SearchIcon/>
            <input placeholder="Search Mail" type="text" />
            <ArrowDropDownIcon className='Header-input'/>
        </div>
        <div className="header-right">
            <IconButton>
                <AppsIcon/> 
            </IconButton>
            <IconButton>
                <NotificationsIcon/>    
            </IconButton>
            <Avatar/>
            
        </div>
    </div>)
}

export default Header