import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { Divider, Icon } from 'semantic-ui-react';


const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedLoginFormInfo = {
      ...loginFormData,
      [name]: value
    }

    updateLoginForm(updatedLoginFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)


  }

  return (
    <div>
      <Divider />
      <form onSubmit={handleSubmit}>
        <div className="ui input">
          <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
          <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /><br /><br />

          <button className="ui blue button" type="submit" value="Log In" > <Icon name='sign in' /> Log In </button>
        </div>
      </form>
    </div>
  )
}

//this gives me an argument coming to this component that looks like this: 
//{
//     username: "xxx",
//     password: "password"
// }

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)