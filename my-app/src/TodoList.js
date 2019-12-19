import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {

    state = {
        list : [],
        inputValue : ""
    }
  
    handleChangeInput = (event) => {
        this.setState({
            inputValue:event.target.value
        })
    }

    handleAddItem = () => {
        this.setState({
            list : [this.state.inputValue,...this.state.list],
            inputValue : ""
        })
    }

    handleDeleteItem = (index) => {
        var arr = this.state.list
        arr.splice(index,1)
        this.setState({
            list : arr
        })  
    }

    getInputItem = () => {
        return(
            this.state.list.map((item,index)=> {
                return (
                    <TodoItem key={index} name={item} index={index} delete={this.handleDeleteItem}/>
                )
            })
        )
    }

    
    render() {
        return(
            <div>
                <input value={this.state.inputValue} onChange={this.handleChangeInput}/>
                <button onClick={this.handleAddItem}>add</button>
                <ul>
                    {this.getInputItem()}
                </ul>
            </div>
        )    
    }
  
}

export default TodoList;
