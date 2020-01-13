export const initialState = {
  loggedIn: false,
  isLoading: false,
  error: "",
  user: {
    username: "",
    password: ""
  },
  jokes: [
    {
      setup: "",
      punchline: "",
      id: 0
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        user: action.payload
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        error: "Incorrect Username/Password",
        isLoading: false
      };
    case "USER_CHANGE_START":
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case "USER_CHANGE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case "USER_CHANGE_FAIL":
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case "JOKE_LOAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        jokes: action.payload
      };
    default:
      return state;
  }
};
