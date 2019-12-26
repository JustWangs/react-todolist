import React from 'react';
import store from './store'
import {Input,Button,List,Modal} from 'antd'
import {actionCreator} from './store/actionCreator'
const { confirm } = Modal;

class TodoList extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(()=> {this.setState(store.getState())})
    }

    handleInputValue = (event) => {
        const action = actionCreator.CHANGE_INPUT_VALUE(event.target.value)
        store.dispatch(action)
    }

    handleAddItem = () => {
        const action = actionCreator.CHANGE_ADD_VALUE()
        store.dispatch(action)
    }

    handleDelItem = (index)=> {
        confirm({
            title: 'Do you Want to delete these items?',
            onOk() {
                const action = actionCreator.HANDLE_DEL_VALUE(index)
                store.dispatch(action)
            },
            onCancel() {},
          });
    }
    
    render() {
        return(
            <div>
                <Input style={{width:300}} onChange={this.handleInputValue} value={this.state.inputValue}></Input>
                <Button type="primary" onClick={this.handleAddItem}>add</Button>
                <List
                    style={{width:300}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick = {()=> {this.handleDelItem(index)}}> {item} </List.Item>
                    )}
                />
            </div>
        ) 
    }
}

export default TodoList;