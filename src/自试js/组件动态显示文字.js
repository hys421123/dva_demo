
import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import {Row,Col,Pagination,Table, message,Icon,Button,Upload,Select, Radio } from 'antd';
import { Component } from 'react'



var TweetBox = React.createClass({
  getInitialState: function() {
    alert('init');
    return {
      text: "",
      photoAdded: false
    };
  },
  handleChange: function(event) {
    this.setState({ text: event.target.value });
  },
  togglePhoto: function(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  },
  remainingCharacters: function() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  },
  render: function() {
    return (
        <div className="well clearfix">
            <textarea className="form-control" onChange={this.handleChange}></textarea>
            <br/>
            <span>{ this.remainingCharacters() }</span>
            <button className="btn btn-primary pull-right"
                    disabled={this.state.text.length === 0 && !this.state.photoAdded}>
                Tweet
            </button>
            <button className="btn btn-default pull-right" onClick={this.togglePhoto}>
                {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
            </button>
        </div>
    );
  }
});

ReactDOM.render(
    <div>
      <TweetBox />
    </div>,
  document.getElementById('root')
);


