function widgets(state = [], action) {
  switch (action.type) {
    case 'GET_WIDGETS':
      return action.payload;
    case 'REMOVE_WIDGETS':
      return action.payload;
    case 'CREATE_WIDGET':
      return action.payload;
    case 'UPDATE_WIDGET':
      return action.payload;
    default:
      return state
  }
}

export default widgets
