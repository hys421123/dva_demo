import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import {Row,Col,Pagination,Table, message,Icon,Button,Upload,Select, Radio } from 'antd';



class Father extends React.Component{
  constructor (props) {
        super(props);
        this.state = {
            currentPassage: ""
        }
        this.refreshCurrentPassage = this.refreshCurrentPassage.bind(this);
    }

    refreshCurrentPassage(cp) {
        this.setState({
            currentPassage: cp
        });
    }

       render() {
        return (
            <div className="passage">
                <NavBar  refreshCurrentPassage={this.refreshCurrentPassage} />
                
            </div>
        );
    }


}//Father_cls


class NavUl extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            passage: []
        }
    }

    componentDidMount() {
    //在ajax请求成功之后调用一次更新父元素状态的函数，来完成一次父子元素之间的通信
        $.ajax({
            url: "../resources/data/passage.json",
            success: (data) => {
                this.setState({
                    passage: data.passages
                });
                this.props.refreshCurrentPassage(data.passages[0].passageName);
            }
        });
    }

    render() {
        let liArray = [];
        this.state.passage.forEach((value,index) => {
            let liEle = <li key={value.passageName.toString()}>
                <a>
                    {value.passageName}({value.letterNum})&nbsp;author:{value.author}
                </a>
            </li>
            liArray.push(liEle);
        });
        return (
            <ul>
                {liArray}
            </ul>
        )
    }
}

class NavBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <NavUl refreshCurrentPassage={this.props.refreshCurrentPassage}/>
            </nav>
        );
    }
}


ReactDOM.render(
< Father />,
  document.getElementById('root')
);


