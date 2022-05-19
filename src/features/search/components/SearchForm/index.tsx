import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Button from "components/Button";
import SearchInput from "features/search/components/SearchForm/SearchInput";
import S from "features/search/components/SearchForm/Style";
import { searchQueryState } from "modules/recoil/search";

function SearchForm() {
  const query = useRecoilValue(searchQueryState);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    // TODO: debouncing때문에 검색 늦게 되는현상
    navigate(`/search/results?query=${query}`);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <SearchInput />
      <Button aria-label="search" type="submit" variant="outlined">
        검색
      </Button>
    </S.Form>
  );
}

export default SearchForm;
