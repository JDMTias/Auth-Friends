import React from "react";
import axios from "axios";

const friendCred = {
    username:'Lambda School',
    password:'i<3Lambd4'

}

class Login extends React.Component {
  state = {friendCred};

  handleChange = (e) => {
    this.setState({
      friendCred: {
        ...this.state.friendCred,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = e => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/login', friendCred)

      .then(res => {
          console.log(res)
          console.log(res.data.payload)
          localStorage.setItem('token', res.data.payload)
          this.props.history.push('/friends')
          
          
      })
      .catch(err => console.log(err))
  }


  render() {
      return (
          <div>
              <form onSubmit={this.login}>
                  <label className='srOnly'>Username:</label>
                 <input
                 type='text'
                 name='username'
                //  value={this.state.friendCred.username} this is when we don't hard code the info
                value='Lambda School'
                 onChange={this.handleChange}
                 />
                  <label className='srOnly'>Password:</label>
                 <input
                 type='text'
                 name='password'
                //  value={this.state.friendCred.password}
                value='i<3Lambd4'
                 onChange={this.handleChange}
                 />
                 <button>Log in!</button>
              </form>
          </div>
      )
  }


}

export default Login
