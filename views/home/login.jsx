let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <div className="login_box"><div className="login" id="js_login"></div></div>
            </Layout>
        )
    }
}
module.exports = Index;