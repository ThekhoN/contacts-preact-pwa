const contacts = (state = [], action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return [...state, ...action.contacts];
    default:
      return state;
  }
};

export default contacts;
