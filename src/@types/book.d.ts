type Book = {
  isbn: string; // ISBN 넘버이다. id로 활용
  title: string; // 검색 결과 문서의 제목을 나타낸다. 제목에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
  link: string; // 검색 결과 문서의 하이퍼텍스트 link를 나타낸다.
  image: string; // 썸네일 이미지의 URL이다. 이미지가 있는 경우만 나타납난다.
  author: string; // 저자 정보이다.
  publisher: string; // 출판사 정보이다.
  pubdate: string; // 출간일 정보이다.
  description: string; // 검색 결과 문서의 내용을 요약한 패시지 정보이다. 문서 전체의 내용은 link를 따라가면 읽을 수 있다. 패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
};
