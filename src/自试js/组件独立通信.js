import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import {Row,Col,Pagination,Table, message,Icon,Button,Upload,Select, Radio } from 'antd';
import { Component } from 'react'
import signals from 'signals'

var broadData=new signals.Signal(); //全局数据广播对象
         var datas={};  //总数据对象



    var ProcessBar=React.createClass({
            getInitialState:function(){
                return {
                    initValue:0, //初始值
                    endValue:0,  //终值
                    totalValue:100 , //总值
                   };
            },
            getPer:function(){
                var that=this;
                broadData.add(function(data){ //收听到数据
                   that.setState({
                      endValue:data.curValue,
                   });
                });
                 var per=(this.state.endValue-this.state.initValue)/this.state.totalValue *100+"%";
                        return per;
            },
            render:function(){
               console.info(this.getPer());
                 var barStyle={
                    width:this.getPer(),
                };
                return(
                     <div className="progress">
                         <div className="progress-bar" style={barStyle}>{this.getPer()}</div>
                             
                     </div>
                    );
            }
         });
 



   var Input=React.createClass({
            
            getEndValue:function(){
                    var curValue=this.refs.endValue.value;
                    if(curValue <= 0) curValue=0;
                    if(curValue >=100) curValue=100;
                    datas.curValue=curValue; //将curValue放入总数居对象
                    broadData.dispatch(datas); //发布数据
                   
            },
            render:function(){
                 
                return (
                     <div>
                         <input type="text"  ref="endValue" placeholder="请输入值" onChange={this.getEndValue}/>
                     </div>
                    );
            }
         });


ReactDOM.render(
    <div>
        <Input />
        <ProcessBar />
    </div>,
  document.getElementById('root')
);


