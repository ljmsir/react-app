import React from 'react';

export default class MsgComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            timer: null,
            date: new Date()
        }
    }

    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }

    componentDidMount () {
        
    }

    // 组件对应的 DOM 元素从页面中删除之前调用。
    componentWillUnmount () {
        console.log('componentWillUnmount', '组件对应的 DOM 元素从页面中删除之前调用，然后再调用componentDidUpdate方法');
        clearInterval(this.timer);
    }

    render () {
        return (
            <div>
                <p>{this.props.msg} 现在的时间是：{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}