import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import {Row,Col,Pagination,Table, message,Icon,Button,Upload,Select, Radio } from 'antd';
import { Component } from 'react'


    var ButtonComment = React.createClass({
        getInitialState: function () {
            return {count:0};
        },

        sendSword: function () {
            var newCount = this.state.count + 1;
            this.setState({count:this.state.count + 1});
            this.props.getSwordCount();
        },

       render: function () {
        console.info("son render");
           return (
                <button onClick={this.sendSword}>{this.props.buttonName}</button>
           );
       }
    });

    var ImDaddyComponent = React.createClass({
        getInitialState: function () {
            return {sendCount:0};
        },
        sendSword: function () {
            this.refs.getSwordButton.sendSword();
        },
        getSwordCount: function () {
            this.setState({sendCount:this.refs.getSwordButton.state.count + 1});
        },
        render: function () {
            console.info("Dad render");
            return (
                <div>
                    <ButtonComment ref="getSwordButton" getSwordCount={this.getSwordCount} buttonName="儿子送宝刀"/>
                    <button onClick={this.sendSword}>通过老爸送宝刀</button>
                    <p>
                        父子俩共送{this.state.sendCount}把宝刀！！！
                    </p>
                </div>
            );
        }
    });



ReactDOM.render(
     <ImDaddyComponent />,
  document.getElementById('root')
);


