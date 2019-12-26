var actionCreator = {

}

actionCreator.CHANGE_INPUT_VALUE = (value) => ({
    type:'change_input_value',
    value
})

actionCreator.CHANGE_ADD_VALUE = () => ({
    type : 'change_add_value'
})

actionCreator.HANDLE_DEL_VALUE = (value) => ({
    type: 'handle_del_value',
    value
})

export {
    actionCreator
}