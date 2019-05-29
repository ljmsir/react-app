import React from 'react';
import {Button} from 'antd';
import MsgComponent from './msg';

export default class LifeStyle extends React.Component {
    // constructor，所有关于组件自身的状态的初始化工作都会放在 constructor 里面去做
    constructor (props) {
        super(props);
        this.state = {
            msg: 'Hello React',
            isShow: true,
            shouldUpdate: false
        }
        console.log('constructor', '初始化阶段');
    }

    // 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
    componentWillMount () {
        console.log('componentWillMount', '挂载前的钩子函数');
    }

    // 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。这时，可以访问真实的DOM节点
    componentDidMount () {
        console.log('componentDidMount', '挂载完成时触发的钩子函数，执行在render方法之后');
    }

    // 组件开始重新渲染之前调用。
    componentWillUpdate () {
        console.log('componentWillUpdate', '更新前的钩子函数，执行完这个方法后，再执行render方法，重新渲染视图');
    }

    // 组件重新渲染并且把更改变更到真实的 DOM 以后调用
    componentDidUpdate () {
        console.log('componentDidUpdate', '更新后的钩子函数，render方法执行完之后执行这个方法');
    }

    // 可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
    shouldComponentUpdate () {
        return !this.state.shouldUpdate
    }

    handleUpdateMsg = () => {
        this.setState({
            msg: 'React生命周期测试'
        })
    }

    handleDeleteMsg = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render () {
        console.log('render', '执行render方法，把虚拟DOM渲染为真实DOM树');
        return (
            <div className='wrapper'>
                <p>React生命周期</p>
                <Button onClick={this.handleUpdateMsg}>更新</Button>&nbsp;&nbsp;
                <Button onClick={this.handleDeleteMsg}>{this.state.isShow ? '隐藏' : '显示'}</Button>
                {!!this.state.isShow ? <MsgComponent msg={this.state.msg}/> : null}
            </div>
        )
    }
}