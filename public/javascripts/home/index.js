import React from 'react';
import ReactDOM  from 'react-dom';
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch('/home/index', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(data => data.json())
            .then(data => this.setState({data: data.data}))
    }
    render(){
        let {data} = this.state;
        console.log(data);
        return (
            <div className="box">

                <div className="right">
                    <ul className="list">
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                        {data.map((item, index) => {
                            return (
                                <li key={index}><span>{index + 1}</span>.<a href="">{item.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default function(){
    let em = document.getElementById('js_index');
    if(em) ReactDOM.render(<Index/>, em);
}