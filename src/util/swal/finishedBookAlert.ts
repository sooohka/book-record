import Swal, { SweetAlertOptions } from "sweetalert2";

const addFinishedBooksModalOption: SweetAlertOptions = {
  title: "읽은목록에 추가",
  icon: "question",
  iconColor: "green",
  confirmButtonText: "추가",
  confirmButtonColor: "green",
  cancelButtonText: "취소",
  showCancelButton: true,
};

const removeFinishedBooksModalOption: SweetAlertOptions = {
  title: "읽은목록에서 해제",
  icon: "warning",
  iconColor: "red",
  confirmButtonText: "해제",
  confirmButtonColor: "red",
  cancelButtonText: "취소",
  showCancelButton: true,
};

const fireRemoveFinishedBooksModal = async (callback: () => void) => {
  const { isConfirmed } = await Swal.fire(removeFinishedBooksModalOption);
  if (isConfirmed) {
    callback();
  }
};
const fireAddFinishedBooksModal = async (callback: () => void) => {
  const { isConfirmed } = await Swal.fire(addFinishedBooksModalOption);
  if (isConfirmed) {
    callback();
  }
};

export { fireAddFinishedBooksModal, fireRemoveFinishedBooksModal };
