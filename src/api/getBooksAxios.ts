import { AxiosError } from "axios";

import axiosBookInstance from "modules/axios/bookInstance";

type Item = {
  title: string; // 검색 결과 문서의 제목을 나타낸다. 제목에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
  link: string; // 검색 결과 문서의 하이퍼텍스트 link를 나타낸다.
  image: string; // 썸네일 이미지의 URL이다. 이미지가 있는 경우만 나타납난다.
  author: string; // 저자 정보이다.
  price: string; // 정가 정보이다. 절판도서 등으로 가격이 없으면 나타나지 않는다.
  discount: string; // 할인 가격 정보이다. 절판도서 등으로 가격이 없으면 나타나지 않는다.
  publisher: string; // 출판사 정보이다.
  pubdate: string; // 출간일 정보이다.
  isbn: string; // ISBN 넘버이다. id로 활용
  description: string; // 검색 결과 문서의 내용을 요약한 패시지 정보이다. 문서 전체의 내용은 link를 따라가면 읽을 수 있다. 패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
};

type ApiResult = {
  lastBuildDate: string; // 검색 결과를 생성한 시간이다.
  total: number; // 검색 결과 문서의 총 개수를 의미한다.
  start: number; // 검색 결과 문서 중, 문서의 시작점을 의미한다.
  display: number; // 검색된 검색 결과의 개수이다.
  items: Item[]; // 검색결과
};

type ApiFailResult = {
  errorMessage: string;
  errorCode: "SE01" | "SE02" | "SE03" | "SE04" | "SE06" | "SE05" | "SE99";
};

const getBooksAxios = async (query: string, start: number) => {
  try {
    const { data } = await axiosBookInstance.get<ApiResult>(
      `/v1/search/book.json?query=${query}&start=${start}&sort=count`
    );

    // TODO:axios error처리
    const books = data.items.map((d) => {
      const {
        author,
        description,
        image,
        isbn,
        link,
        pubdate,
        publisher,
        title,
      } = d;

      return {
        author,
        description,
        image,
        isbn,
        link,
        pubdate,
        publisher,
        title,
      };
    });

    return { data: books };
  } catch (e: unknown) {
    const error = e as AxiosError<ApiFailResult>;
    console.error(e);
    console.error(error);
    throw e;
  }
};

export default getBooksAxios;
