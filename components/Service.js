import React from 'react';
import Nav from './Nav';
import './Style.css';
import { useSelector } from 'react-redux';

const Service = () =>{

    const isLight = useSelector((state)=>state.isLight);

    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Nav />
            <h1>Our service are not avilable</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui mollitia ex unde esse facere dolores? Sequi quisquam ad laboriosam, modi veritatis, corporis quas perspiciatis similique perferendis laborum eaque nobis cumque.</p>
          </div>    
        </>
    )
}

export default Service;