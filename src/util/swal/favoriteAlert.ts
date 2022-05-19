import Swal, { SweetAlertOptions } from "sweetalert2";

const addFavoriteModalOption: SweetAlertOptions = {
  title: "즐겨찾기 추가",
  icon: "question",
  iconColor: "green",
  confirmButtonText: "추가",
  confirmButtonColor: "green",
  cancelButtonText: "취소",
  showCancelButton: true,
};

const removeFavoriteModalOption: SweetAlertOptions = {
  title: "즐겨찾기 해제",
  icon: "warning",
  iconColor: "red",
  confirmButtonText: "해제",
  confirmButtonColor: "red",
  cancelButtonText: "취소",
  showCancelButton: true,
};

const fireRemoveFavoriteModal = async (callback: () => void) => {
  const { isConfirmed } = await Swal.fire(removeFavoriteModalOption);
  if (isConfirmed) {
    callback();
  }
};
const fireAddFavoriteModal = async (callback: () => void) => {
  const { isConfirmed } = await Swal.fire(addFavoriteModalOption);
  if (isConfirmed) {
    callback();
  }
};

export { fireAddFavoriteModal, fireRemoveFavoriteModal };
