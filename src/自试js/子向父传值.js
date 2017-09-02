import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import {Row,Col,Pagination,Table, message,Icon,Button,Upload,Select, Radio } from 'antd';
import { Component } from 'react'


class Father extends Component {
    constructor (props){
        super(props)
        this.state = {
            data: 'wait child to father'
        }
    }
    fatherHandleClick(data){
        this.setState({
            data
        })
    }
    render (){

        return <div>
            <Child fatherHandleClick={ this.fatherHandleClick.bind(this) } />
            <h1>{this.state.data}</h1>
        </div>
    }
}
class Child extends Component {

    render (){
        const {props} = this
        return <div onClick={ ()=>{
            this.props.fatherHandleClick('child to father')
        } }>
            <h1>This is Child.</h1>
        </div>
    }
}



ReactDOM.render(
< Father />,
  document.getElementById('root')
);


