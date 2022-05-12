import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../../../../components/IconButton";
import SearchForm from "../../components/SearchForm";
import SearchList from "../../components/SearchList";
import SearchListItem from "../../components/SearchList/SearchListItem";
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
          Icon={ArrowLeftIcon}
        />
        {/* TODO:submit로직 */}
        <SearchForm
          //
          handleSubmit={() => {}}
          input=""
          setInput={() => {}}
        />
      </S.Header>
      <S.Content>
        <SearchList>
          <SearchListItem />
        </SearchList>
      </S.Content>
    </S.Container>
  );
}

export default SearchPage;
