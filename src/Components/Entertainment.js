import React, { Component } from 'react'
import News from './News';

export default class Entertainment extends Component {
    render() {
        return (
            <div>
                <News pageSize={6} category='entertainment' />
            </div>
        )
    }
}
