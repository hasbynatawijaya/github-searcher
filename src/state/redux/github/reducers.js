import actionTypes from "./types";

const initialState = {
  status: "idle",
  userList: { total: 0, items: [] },
  repositoryList: { total: 0, items: [] },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.userList:
      return {
        ...state,
        userList: action.payload,
      };
    case actionTypes.repositoryList:
      return {
        ...state,
        repositoryList: action.payload,
      };
    case actionTypes.status:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
