import axios from "axios";

import { setUserList, setRepositoryList, setStatus } from "./mutations";

export const indexUser =
  (keyword, page = 0) =>
  async (dispatch) => {
    try {
      const response = await axios.get("search/users", {
        params: {
          q: keyword,
          page,
          per_page: 12,
        },
      });
      const data = response.data;

      if (data) {
        dispatch(setStatus("success"));
        dispatch(
          setUserList({
            total: data.total_count,
            items: data.items,
          })
        );
      }
    } catch (error) {
      dispatch(setStatus("error"));
      dispatch(
        setUserList({
          total: 0,
          items: [],
        })
      );
      throw error;
    }
  };

export const indexRepository =
  (keyword, page = 0) =>
  async (dispatch) => {
    try {
      const response = await axios.get("search/repositories", {
        params: {
          q: keyword,
          page,
          per_page: 12,
        },
      });
      const data = response.data;

      if (data) {
        dispatch(setStatus("success"));
        dispatch(
          setRepositoryList({
            total: data.total_count,
            items: data.items,
          })
        );
      }
    } catch (error) {
      dispatch(setStatus("error"));
      dispatch(
        setRepositoryList({
          total: 0,
          items: [],
        })
      );
      throw error;
    }
  };
