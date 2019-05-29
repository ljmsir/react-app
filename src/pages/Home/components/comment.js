import React from 'react';
import Modal from './../../../utils/Modal';
import {Message} from 'antd';

export default class Comment extends React.Component {
    handleDeleteComment = () => {
        Modal.confirm('温馨提示', '删除评论？', () => {
            if (!!this.props.onDeleteComment) {
                this.props.onDeleteComment(this.props.index);
            }
        }, () => {
            Message.info('取消删除评论');
        })
    }

    render () {
        const {comment} = this.props;
        const delStyle = {position: 'absolute', right: 0, cursor: 'pointer'};
        
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username}</span>：
                </div>
                <p>{comment.comment}</p>
                <span style={delStyle} className='comment-delete' onClick={this.handleDeleteComment}>删除</span>
            </div>
        )
    }
}