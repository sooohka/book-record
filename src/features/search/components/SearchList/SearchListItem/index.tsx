import { useNavigate } from "react-router-dom";

import { SearchOutlineIcon } from "assets/svgs";
import S from "features/search/components/SearchList/SearchListItem/Style";

type Props = {
  result: string;
};

function SearchListItem({ result }: Props) {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    // TODO: textContent 위험함
    if (e.currentTarget.textContent) {
      navigate(`/search/results?query=${e.currentTarget.textContent}`);
    }
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      if (e.currentTarget.textContent) {
        navigate(`/search/results?query=${e.currentTarget.textContent}`);
      }
    }
  };

  return (
    <S.Container onKeyUp={handleKeyUp} onClick={handleClick} tabIndex={0}>
      <SearchOutlineIcon width="2.5rem" height="2.5rem" />
      <S.Text dangerouslySetInnerHTML={{ __html: result }} />
    </S.Container>
  );
}

export default SearchListItem;
