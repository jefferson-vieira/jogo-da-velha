import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Modal = withReactContent(
  Swal.mixin({
    confirmButtonText: 'Recomeçar',
    cancelButtonText: 'Fechar',
    showCancelButton: true,
    reverseButtons: true,
    heightAuto: false,
    background: '#f8f8f2',
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn--primary',
      cancelButton: 'btn btn--secondary'
    }
  })
);

export default Modal;
