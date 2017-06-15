let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <div className="login" id="js_login">

                </div>
            </Layout>
        )
    }
}
module.exports = Index;