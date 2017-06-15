import React from 'react';
class Layout extends React.Component{
    render(){
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link href="/stylesheets/home.css" rel="stylesheet"/>
                </head>
                <body>
                    {this.props.children}
                </body>
                <script src="/javascripts/vendor.js"></script>
                <script src="/javascripts/home.js"></script>
            </html>
        )
    }
}
module.exports = Layout;
