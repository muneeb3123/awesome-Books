// eslint-disable-next-line import/prefer-default-export, no-undef
export const toastMixin = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  animation: false,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});
