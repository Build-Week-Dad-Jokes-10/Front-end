export const initialState = {
  loggedIn: false,
  isLoading: false,
  error: '',
  user: {
    username: '',
    password: ''
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        user: action.payload
      }
    default:
      return state;
  }
};
