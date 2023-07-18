import React, { Component } from 'react'
import News from './News'

export default class Health extends Component {
    render() {
        return (
            <div>
                <News pageSize={6} category='health'/>
            </div>
        )
    }
}
