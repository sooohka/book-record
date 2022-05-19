import { favoritesState } from "modules/recoil/favorite";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

function useFavoriteState() {
  const [favorites, setFavorites] = useRecoilState(favoritesState);

  const deleteFavorite = useCallback(
    (book: Book) => {
      setFavorites((prev) => prev.filter((v) => v.isbn !== book.isbn));
    },
    [setFavorites]
  );

  const addFavorite = useCallback(
    (book: Book) => {
      setFavorites((prev) => [...prev, book]);
    },
    [setFavorites]
  );

  const getFavoriteById = useCallback(
    (id: string) => favorites.find((v) => v.isbn === id),
    [favorites]
  );

  return { favorites, deleteFavorite, addFavorite, getFavoriteById };
}
export default useFavoriteState;
