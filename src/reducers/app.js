const app = (state={loaded: false, loading: false, error: false}, action) => {
  switch (action.type) {
    case 'APP_LOADED':
      return {...state, loaded :true};
    case 'APP_LOADING':
      return {...state, loading: true};
    case 'APP_ERROR':
      return {...state, error: true};
    default:
      return state;
  }
};

export default app;
