import { QueryParam } from "../@types/api";
import axiosBookInstance from "./bookInstance";

const getBooks = (queryParam: QueryParam) => {
  const parsedQuery = Object.keys(queryParam).reduce((p, key) => {
    if (key === "query") return `${p}?query=${queryParam[key]}`;
    return `${p}&${key}=${queryParam[key as keyof typeof queryParam]}`;
  }, "");
  return axiosBookInstance.get(`/v1/search/book.json${parsedQuery}`);
};
export default getBooks;
