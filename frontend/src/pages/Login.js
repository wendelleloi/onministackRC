import React, { Component } from 'react';

import TwiterLogo from '../twitter.svg';
import './Login.css';


export default class Login extends Component {

    state = {
        username: '',
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const {username} = this.state;

        if(!username.length) return;

        localStorage.setItem('@GoTwitter:username',username);

        this.props.history.push('/timeline');
    };

    handleInputChance = (e) =>{
        this.setState({ username: e.target.value });
    };

  render() {
    return (
        <div className="login-wrapper">
            <img src={TwiterLogo} alt="GoTwitter"/>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Nome do Usuário" 
                value={this.state.username}
                onChange={this.handleInputChance}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
  }
}
