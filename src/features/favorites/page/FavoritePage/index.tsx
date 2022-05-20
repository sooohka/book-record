import { useRecoilValue } from "recoil";

import BookList from "components/BookList";
import AppWrapper from "components/Layout/AppContainer";
import { favoritesState } from "modules/recoil/favorite";
import Title from "components/Title";

function FavoritesPage() {
  const favoriteValue = useRecoilValue(favoritesState);
  if (favoriteValue.length === 0) {
    return (
      <AppWrapper>
        <Title>좋아요 목록이 없어요😭</Title>
      </AppWrapper>
    );
  }

  return (
    <AppWrapper>
      <Title>좋아요 목록</Title>
      <BookList books={favoriteValue} />
    </AppWrapper>
  );
}

export default FavoritesPage;
