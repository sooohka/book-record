import axiosBookInstance from "./bookInstance";

type QueryParam = {
  query: string; // 검색을 원하는 문자열로서 UTF-8로 인코딩한다.
  display?: number; // 10(기본값), 100(최대) 검색 결과 출력 건수 지정
  start?: number; // 1(기본값), 1000(최대) 검색 시작 위치로 최대 1000까지 가능 -
  sort?: "sim" | "date" | "count"; // sim(기본값), date 정렬 옵션: sim(유사도순), date(출간일순), count(판매량순)
};

const getBooks = (queryParam: QueryParam) => {
  const parsedQuery = Object.keys(queryParam).reduce((p, key) => {
    if (key === "query") return `${p}?query=${queryParam[key]}`;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${p}&${key}=${queryParam[key as keyof typeof queryParam]}`;
  }, "");

  return axiosBookInstance.get<Book[]>(`/v1/search/book.json${parsedQuery}`);
};

export default getBooks;
