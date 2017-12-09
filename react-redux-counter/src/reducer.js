function reducer(prevState = {counter: 0}, action) {
    let newState = prevState;

    if (action.type === 'INC') {
        newState = {counter: prevState.counter + 1};
    }

    if (action.type === 'DEC') {
        newState = {counter: prevState.counter - 1};
    }

    return newState;

}

export default reducer;