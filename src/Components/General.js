import React, { Component } from 'react'
import News from './General'

export default class General extends Component {
    render() {
        return (
            <div>
                <News pageSize={6} category='general' />
            </div>
        )
    }
}
