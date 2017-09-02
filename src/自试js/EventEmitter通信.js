import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import {Row,Col,Pagination,Table, message,Icon,Button,Upload,Select, Radio } from 'antd';
import { Component } from 'react'



var eventEmitter2 = require('events').EventEmitter;
// var emitter = new events.EventEmitter(); 
var events = require('events');
var eventEmitter = new events.EventEmitter();

class A extends Component {
    constructor (props){
        super(props)
       
       // EventEmitter.addListener('click',function(){
       //      console.info("A_Component");
       // });

       eventEmitter.addListener('click', function(){
            console.info("A_Component");
       });

    }//constructor
  

    render (){
        console.info("A_render");
        return <div>
           
        </div>
    }
}
class B extends Component {
    constructor (props){
        super(props)
       // this.dispatchEvent('click');

    }



    render (){
       
        return <div >
            <h1>This is Child.</h1>
            <Button
                onClick={()=>
                    { 
                        // console.info("我是B");
                         eventEmitter.emit('click');
                    }//onClick
                }

            >点击我发送A消息</Button>
        </div>
    }
}




ReactDOM.render(
    <div>
      <A/>
      <B/>
    </div>,
  document.getElementById('root')
);


