import React from 'react';
import {Button} from 'antd';
import Modal from './../../../utils/Modal';

export default class CommentInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            comment: ''
        }
    }

    // 处理用户名输入
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    // 处理评论内容输入
    handleCommnetChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    // 提交事件
    handleSubmit = () => {
        if (!this.state.username) {
            Modal.warning('温馨提示', '请输入用户名');
            return;
        }

        if (!this.state.comment) {
            Modal.warning('温馨提示', '请输入评论内容');
            return;
        }
        
        if (!!this.props.onSubmit) {
            const {username, comment} = this.state;
            this.props.onSubmit({username, comment});
        }

        this.setState({
            username: '',
            comment: ''
        });
    }

    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUserNameChange}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.comment} onChange={this.handleCommnetChange}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <Button type='primary' onClick={this.handleSubmit}>评论</Button>
                </div>
            </div>
        )
    }
}