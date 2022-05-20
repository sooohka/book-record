import Swal, { SweetAlertOptions } from "sweetalert2";

const moveToLinkAlertOption: SweetAlertOptions = {
  title: "책 링크로 이동하시겠습니까?",
  icon: "question",
  iconColor: "blue",
  confirmButtonText: "이동",
  confirmButtonColor: "blue",
  cancelButtonText: "취소",
  showCancelButton: true,
};

const fireMoveToLink = async (callback: () => void) => {
  const { isConfirmed } = await Swal.fire(moveToLinkAlertOption);
  if (isConfirmed) {
    callback();
  }
};
export { fireMoveToLink };
