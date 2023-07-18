import React, { Component } from 'react'
import News from './News'

export default class Science extends Component {
    render() {
        return (
            <div>
                <News pageSize={6} category='science'/>
            </div>
        )
    }
}
