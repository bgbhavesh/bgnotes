function products(state = [], action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.payload;
    case 'REMOVE_PRODUCTS':
      return action.payload;
    case 'CREATE_PRODUCTS':
      return action.payload;
    case 'UPDATE_PRODUCTS':
      return action.payload;
    default:
      return state
  }
}

export default products
