/**
 * 高阶组件：高阶组件就是一个函数（而不是组件），传给它一个组件，它返回一个新的组件
 * 高阶组件接受一个组件作为参数，返回一个新组件，这个新组件会使用你传给它的组件作为子组件
 */
import React from 'react';

 export const HigherComponent = (WrapperComponent, list) => {
    class NewComponent extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                list: []
            }
        }

        componentWillMount () {
            this.setState({list});
        }

        render () {
            return <WrapperComponent list={this.state.list}/>
        }
    }
    return NewComponent;
}