import React, { Component } from 'react';

class LoginValid extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
      }
      
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    // if(this.state.username !== 'Admin' && this.state.password !== 'password'){
    //   return false
    // }
  };

    render() {
        const { email, password } = this.state;
        return <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    }
}

export default LoginValid;