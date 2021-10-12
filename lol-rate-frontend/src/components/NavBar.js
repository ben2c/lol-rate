import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import '../App.css';
import Icon from '../images/icon.png';

const NavBar = () => {

  return (
    <div className="nav">
      <Menu>

        <a href='/'><img src={Icon} height='60' width='60' /></a>

        <Link to='/champions' className='champ'>
          View All Champions
        </Link>

        <Link to='/Like' className='champ'>
          View My Liked Champions
        </Link>

        <Link to='/about' className='champ'>
          About Us
        </Link>

      </Menu>
    </div>
  )
}

export default NavBar