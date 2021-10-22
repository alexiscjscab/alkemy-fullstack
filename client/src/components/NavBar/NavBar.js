// import { makeStyles } from '@material-ui/core';
import React from 'react';
import Nav from './styledNavBar';

import {
    AppBar,
    Toolbar,
    List
} from '@material-ui/core';

import {Link} from 'react-router-dom';

const links = [
    {
        text: 'Home',
    },
    {
        text: 'Add Operation'
    },
    {
        text: 'All Operations'
    }
];


const NavBar = () => {
    // const classes = useStyles();


    return (
        // <div className={classes.root}></div>
        <Nav>
            <AppBar position='sticky' className='appbar'>
                <Toolbar className='toolbar'>
                    <List>
                        {
                            links.map((item,index) => (
                                <Link
                                    key={index}
                                    to={item.text}
                                >
                                {item.text}
                                </Link>
                            ))
                        }
                    </List>
                </Toolbar>
            </AppBar>
        </Nav>
    )
}



export default NavBar


// const useStyles = makeStyles((theme) => ({
    
// }))