import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    deleteItem = () => {
        this.props.delete(this.props.index)
    }

    render() {
        return (
            <li onClick={this.deleteItem}>
                {this.props.name}
            </li>
        )
    }
}
