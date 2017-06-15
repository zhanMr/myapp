import React from 'react';
import ReactDOM  from 'react-dom';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            status: true,
            error: null
        };
    }
    goHome(){
        let {username, password} = this.state;
        fetch('/home/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${username}&password=${password}`
        })
        .then(data => data.json())
        .then(json => console.log(json))
    }
    setUsername(e){
        let username = e.target.value;
        this.setState({username});
    }
    setPassword(e){
        let password = e.target.value;
        this.setState({password});
    }
    render(){
        let {username, password, status, error} = this.state;
        return (
            <div>
                <h2>管理员</h2>
                <p><input type="text" value={username} placeholder="用户名" onChange={this.setUsername.bind(this)}/></p>
                <p><input type="password" value={password} placeholder="密码" onChange={this.setPassword.bind(this)}/></p>
                {error && <p className="error">用户名或密码错误</p>}
                <p><button onClick={this.goHome.bind(this)}>{status ? '登录' : '登录中'}</button></p>
            </div>
        )
    }
}

export default function(){
    ReactDOM.render(<Login/>, document.getElementById('js_login'));
}