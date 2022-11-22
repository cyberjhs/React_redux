import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLight } from '../slice';

const Nav = () =>{

  const isLight = useSelector((state)=>state.isLight);

  const dispatch = useDispatch();

  return(
    <div>
      <div>Geekster</div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/contact">Contant</Link>
      <br/>
      <Link to="/service">Service</Link>
      <br/>
      <button onClick={()=>{
        const message = `I have changed theme to ${isLight?"Dark":"Light"}`
        dispatch(setIsLight(message))
        }}>Toggle theme to {isLight?"Dark":"Light"}</button>
    </div>
  )
}

export default Nav;