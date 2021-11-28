import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  indexUser as getUserList,
  indexRepository as getRepositoryList,
} from "../../../../state/redux/github/actions";
import {
  userListSelector,
  repositoryListSelector,
  statusSelector,
} from "../../../../state/redux/github/selectors";

import LoadingHOC from "../../../components/HOC/Loading";
import UserCard from "../../../components/UserCard";
import RepositoryCard from "../../../components/RepositoryCard";
import Pagination from "../../../components/Pagination";

import "./content.scss";

const Content = ({ setIsLoading, isLoading, searchType, searchTerm }) => {
  const dispatch = useDispatch();
  const userList = useSelector(userListSelector);
  const repositoryList = useSelector(repositoryListSelector);
  const status = useSelector(statusSelector);

  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setCurrentPage(1);

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== "") {
        handleFetch();
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, searchType]);

  const handleFetch = async (page = currentPage) => {
    try {
      setIsLoading(true);
      if (searchType === "users") {
        await dispatch(getUserList(searchTerm, page));
      } else {
        await dispatch(getRepositoryList(searchTerm, page));
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
    handleFetch(page);
  };

  const renderContent = () => {
    const idle = "Come search something";
    const error = "Something went wrong try again later";
    const empty = "Data not found, try another keyword";

    if (status === "idle") {
      return idle;
    } else if (status === "error") {
      return error;
    } else if (status === "success") {
      if (searchType === "users") {
        if (userList.items.length) {
          return (
            <>
              <div className="content__items">
                {userList.items.map((item) => (
                  <UserCard key={item.id} item={item} />
                ))}
              </div>
              <Pagination
                data={userList.items}
                total={userList.total}
                currentPage={currentPage}
                setCurrentPage={(page) => handleChangePage(page)}
                pageLimit={5}
                dataLimit={12}
              />
            </>
          );
        } else return empty;
      } else if (searchType === "repositories") {
        if (repositoryList.items.length) {
          return (
            <>
              <div className="content__items">
                {repositoryList.items.map((item) => (
                  <RepositoryCard key={item.id} item={item} />
                ))}
              </div>
              <Pagination
                data={repositoryList.items}
                total={repositoryList.total}
                currentPage={currentPage}
                setCurrentPage={(page) => handleChangePage(page)}
                pageLimit={5}
                dataLimit={12}
              />
            </>
          );
        } else return empty;
      }
    }
  };

  return <div className="content">{!isLoading && renderContent()}</div>;
};

export default LoadingHOC(Content);
