import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  loading: null,
  error: null,
};

export const WriteContext = createContext(INITIAL_STATE);

const WriteReducer = (state, action) => {
  switch (action.type) {
    case "WRITE_START":
      return { user: null, loading: true, error: null };
    case "WRITE_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "WRITE_FAILURE":
      return { user: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const WriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WriteReducer, INITIAL_STATE);

  return (
    <WriteContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};
