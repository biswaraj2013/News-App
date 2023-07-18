import React, { Component } from 'react'
import News from './News'

export default class Sports extends Component {
    render() {
        return (
            <div>
                <News pageSize={6} category='sports' />
            </div>
        )
    }
}
