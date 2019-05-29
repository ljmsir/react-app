
import React from 'react';
import {HigherComponent} from './components/higherComponents';

class TestComponent extends React.Component {
    render () {
        const dataList = this.props.list;
        return (
            <ul>
                {(dataList || []).map((item, index) => {
                    return (
                        <li key={index}>{item.name}{item.job}</li>
                    )
                })}
            </ul>
        )
    }
}

const list = [
    {
        name: 'MLXG',
        job: 'Juggle'
    },
    {
        name: 'Faker',
        job: 'Mid'
    },
    {
        name: 'TheShy',
        job: 'Sup'
    }
]

TestComponent = HigherComponent(TestComponent, list);

export default TestComponent;