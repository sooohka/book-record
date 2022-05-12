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

// 400	SE01	Incorrect query request (잘못된 쿼리요청입니다.)	검색 API 요청에 오류가 있습니다. 요청 URL, 필수 요청 변수가 정확한지 확인 바랍니다.
// 400	SE02	Invalid display value (부적절한 display 값입니다.)	display 요청 변수값이 허용 범위(1~100)인지 확인해 보세요.
// 400	SE03	Invalid start value (부적절한 start 값입니다.)	start 요청 변수값이 허용 범위(1~1000)인지 확인해 보세요.
// 400	SE04	Invalid sort value (부적절한 sort 값입니다.)	sort 요청 변수 값에 오타가 없는지 확인해 보세요.
// 400	SE06	Malformed encoding (잘못된 형식의 인코딩입니다.)	검색어를 UTF-8로 인코딩하세요.
// 404	SE05	Invalid search api (존재하지 않는 검색 api 입니다.)	검색 API 대상에 오타가 없는지 확인해 보세요.
// 500	SE99	System Error (시스템 에러)	서버 내부 에러가 발생하였습니다. 포럼에 올려주시면 신속히 조치하겠습니다.
export {};
