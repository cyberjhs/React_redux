import React from 'react';
import Nav from './Nav';
import './Style.css';
import { useSelector } from 'react-redux';

const Home = () =>{

  const isLight = useSelector((state)=>state.isLight);

  return(
    <>
      <div className={isLight?'light':'dark'}>
        <Nav />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, ad itaque rerum quisquam maiores, veniam ipsam eveniet fuga suscipit odit a. Ea, saepe debitis? Officia sunt facilis numquam similique assumenda delectus rerum mollitia porro maxime veniam! Ipsa sunt omnis illum nostrum laborum, quos, corrupti cum quas corporis cupiditate minima. Nobis cupiditate unde reprehenderit veniam eligendi ex? Perspiciatis voluptatem consequatur repudiandae quidem voluptate eveniet ratione at modi sunt officiis, cumque voluptates magnam porro reiciendis expedita laborum doloremque dolor ut tempore molestiae. Exercitationem optio ut eius nesciunt quae atque, vel quia ea, omnis fugit est. Ex minus consequatur non asperiores, voluptatem ducimus?</p>
      </div>
    </>
  )
}

export default Home;