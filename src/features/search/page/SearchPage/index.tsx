import { ArrowLeftOutlinedIcon } from "assets/svgs";
import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../../../../components/IconButton";
import SearchForm from "../../components/SearchForm";
import SearchList from "../../components/SearchList";
import S from "./Style";

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
