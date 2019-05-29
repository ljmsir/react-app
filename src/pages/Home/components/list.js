import React from 'react';
import Comment from './comment';

export default class CommentList extends React.Component {
    // 设置默认props
    static defaultProps = {
        comments: []
    }

    handleDeleteComment = (index) => {
        if (!!this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render () {
        return (
            !!this.props.comments.length ?
            <div className='comment-wrapper'>
                {this.props.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} index={index} onDeleteComment={this.handleDeleteComment}/>
                })}
            </div> : null
        )
    }
}