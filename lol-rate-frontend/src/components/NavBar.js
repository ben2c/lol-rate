import { connect } from 'react-redux';
import Login from "./Login"
import Logout from "./Logout"
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}
const NavBar = ({ currentUser }) => {
  let loggedIn = currentUser.username
  return (

    <div className="nav">
      <Menu>

        {loggedIn ? <strong>Welcome, {currentUser.username}</strong> : <strong>Please log in</strong>}

        {loggedIn ? <Logout /> : <Login />}


        <Link to='/champions' className='item'>
          View All Champions
        </Link>

        <Link to='/Like' className='item'>
          View My Champions
        </Link>


      </Menu>
    </div>
  )
}

export default connect(mapStateToProps)(NavBar)