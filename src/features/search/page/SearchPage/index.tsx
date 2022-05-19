import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

import { ArrowLeftOutlinedIcon } from "assets/svgs";
import IconButton from "components/IconButton";
import SearchForm from "features/search/components/SearchForm";
import SearchList from "features/search/components/SearchList";
import S from "features/search/page/SearchPage/Style";

function SearchPage() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Header>
        <IconButton
          onClick={() => navigate(-1)}
          width="2.5rem"
          height="2.5rem"
          Icon={ArrowLeftOutlinedIcon}
        />
        <SearchForm />
      </S.Header>
      <S.Content>
        <Suspense>
          <SearchList />
        </Suspense>
      </S.Content>
    </S.Container>
  );
}

export default SearchPage;
