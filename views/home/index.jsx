let React = require('react');
let Layout = require('./layout');
class Index extends React.Component{
    render(){
        let {title} = this.props;
        return (
            <Layout title={title}>
                <div className="box" id="js_index">

                </div>
            </Layout>
        )
    }
}
module.exports = Index;