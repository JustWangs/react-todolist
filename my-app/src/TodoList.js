import React from 'react'
import store from './store'
import { Button, Input, List} from 'antd'

class TodoList extends React.Component{
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(()=> {this.setState(store.getState())})
    }

    handleInputValue = (e) => {
        const action = {
            type : 'change_input_value',
            value : e.target.value
        }
        store.dispatch(action)
    }

    handleAddItem() {
        const action = {
            type : 'new_item'
        }
        store.dispatch(action)
    }

    handleItemClick = (index) => {
        const action = {
            type : 'handle_item_change',
            value : index
        }
        store.dispatch(action)
    } 

    render() {
        return (
            <div>
                <Input style={{width:300}} value={this.state.inputValue} onChange={this.handleInputValue}></Input>
                <Button type="primary" onClick={this.handleAddItem}>add</Button>
                <List
                    bordered
                    style={{width:300}}
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick = {()=> {this.handleItemClick(index)}}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoList