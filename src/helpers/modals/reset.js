import Modal from 'configs/swal';

export default async function reset(action) {
  return Modal.fire({
    type: 'question',
    title: 'Espera...',
    text: 'Quer mesmo redefinir a pontuação?',
    confirmButtonText: 'Quero!',
    cancelButtonText: 'Ops...'
  }).then(result => result.value && action());
}
