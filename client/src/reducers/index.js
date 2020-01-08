export const initialState = {
  loggedIn: false,
  error: '',
  username: '',
  password: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
