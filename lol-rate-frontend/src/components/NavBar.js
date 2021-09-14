import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

const NavBar = ({ currentUser }) => {

  return (
    <div className="nav">
      <Menu>

        <Link to='/' className='champ'>
          Home
        </Link>

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