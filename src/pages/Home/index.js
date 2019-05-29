import React from 'react';
import CommentInput from './components/input';
import CommentList from './components/list';
import './index.css';

export default class CommentApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    // 父组件监听onSubmit回调事件，并把值传给list组件渲染
    handleSubmitComment = (comment) => {
        this.state.comments.push(comment);
        this.setState({comments: this.state.comments});
    }

    // 父组件监听onDeleteComment回调事件
    handleDeleteComment = (index) => {
        this.state.comments.splice(index, 1);
        // 必须调用setState方法
        this.setState({comments: this.state.comments});
        console.log(this);
    }

    render () {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment}/>
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment}/>
            </div>
        )
    }
}