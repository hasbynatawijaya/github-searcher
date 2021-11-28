import actionTypes from "./types";

export const setStatus = (data) => ({
  type: actionTypes.status,
  payload: data,
});

export const setUserList = (data) => ({
  type: actionTypes.userList,
  payload: data,
});

export const setRepositoryList = (data) => ({
  type: actionTypes.repositoryList,
  payload: data,
});
