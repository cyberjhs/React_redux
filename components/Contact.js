import React from 'react';
import Nav from './Nav';
import './Style.css';
import { useSelector } from 'react-redux';

const Contact = ()  =>{

    const isLight = useSelector((state)=>state.isLight);

    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Nav />
            <h1>You can mail me help@geekster.in</h1>
          </div>  
        </>  
    )
}

export default Contact;