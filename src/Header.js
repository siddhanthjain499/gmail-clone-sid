import React from 'react';
import '../src/styles/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Header(){
    return (<div className='heading'>
        <div className="header-left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
        </div>
        <div className="header-middle">
            
        </div>
        <div className="header-right">
            
        </div>
    </div>)
}

export default Header