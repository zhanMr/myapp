let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <div className="login">
                    <h2>管理员</h2>
                    <p><input type="text" placeholder="用户名"/></p>
                    <p><input type="password" placeholder="密码"/></p>
                    <p><button>登录</button></p>
                </div>
            </Layout>
        )
    }
}
module.exports = Index;