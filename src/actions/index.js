import 'whatwg-fetch';

const getContacts = (contacts) => {
  return {
    type: 'GET_CONTACTS',
    contacts
  };
};

const appLoaded = () => {
  return {
    type: 'APP_LOADED',
    loaded: true
  };
};

const appLoading = () => {
  return {
    type: 'APP_LOADING',
    loading: true
  };
};

export const dispatchAsyncFetchContacts = (url) => {
  return (dispatch) => {
    dispatch(appLoading());
    fetch(url)
    .then(res => res.json())
    .then(jsonRes => {
      dispatch(getContacts(jsonRes));
      dispatch(appLoaded());
    })
    .catch(err => {
      console.log('err in dispatchAsyncFetchContacts: ', err);
    });
  };
};
