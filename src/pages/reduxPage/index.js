/**
 * Redux上手
 * 模块之间，可以共享数据，也可以修改数据，但是，我们约定，这个数据不能直接修改，你只能执行某些我们允许的某些修改，而且你修改的数据必须通知我
 * 任务模块要修改store里的数据，都必须通过disptch来完成
 */
import React from 'react';

export default class ReduxTestComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="wrapper">
                <p>Redux上手</p>
            </div>
        )
    }
}