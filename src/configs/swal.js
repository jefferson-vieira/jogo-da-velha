import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Modal = withReactContent(
  Swal.mixin({
    confirmButtonText: 'Recomeçar',
    cancelButtonText: 'Fechar',
    showCancelButton: true,
    reverseButtons: true,
    heightAuto: false
  })
);

export default Modal;
